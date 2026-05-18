import { useSession } from "@/features/session/model/useSession";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import {
  createTask,
  deleteTask,
  fetchTasksForUser,
  toggleTaskCompleted,
  updateTask,
} from "./taskService";
import { Priority, Task } from "./types";

export const TASKS_QUERY_KEY = ["tasks"] as const;

export const useTasks = () => {
  const { user } = useSession();
  const queryClient = useQueryClient();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("media");
  const [showSuccess, setShowSuccess] = useState(false);
  const successRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tasksQuery = useQuery<Task[]>({
    queryKey: [...TASKS_QUERY_KEY, user?.id],
    queryFn: async () => {
      if (!user?.id) return [];
      return fetchTasksForUser(user.id);
    },
    enabled: !!user?.id,
  });

  const clearSuccess = useCallback(() => {
    if (successRef.current) {
      clearTimeout(successRef.current);
      successRef.current = null;
    }
  }, []);

  useEffect(() => () => clearSuccess(), [clearSuccess]);

  const triggerSuccess = useCallback(
    (afterMs = 2000) => {
      setShowSuccess(true);
      clearSuccess();
      successRef.current = setTimeout(() => {
        setShowSuccess(false);
        closeForm();
      }, afterMs);
    },
    [clearSuccess]
  );

  const createMutation = useMutation({
    mutationFn: async () => {
      if (!user?.id) throw new Error("No autenticado");
      return createTask({
        title: title.trim(),
        description: description.trim(),
        priority,
        user_id: user.id,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      triggerSuccess();
    },
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo crear la tarea."),
  });

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!editingTask) throw new Error("Sin tarea");
      return updateTask({
        id: editingTask.id,
        title: title.trim(),
        description: description.trim(),
        priority,
        completed: editingTask.completed,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      triggerSuccess();
    },
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo actualizar la tarea."),
  });

  const toggleMutation = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      toggleTaskCompleted(id, completed),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY }),
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo actualizar."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      setTaskToDelete(null);
    },
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo eliminar la tarea."),
  });

  const openCreateForm = useCallback(() => {
    clearSuccess();
    setIsEditing(false);
    setEditingTask(null);
    setTitle("");
    setDescription("");
    setPriority("media");
    setShowSuccess(false);
    setIsFormOpen(true);
  }, [clearSuccess]);

  const openEditForm = useCallback((task: Task) => {
    setIsEditing(true);
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description ?? "");
    setPriority(task.priority);
    setIsFormOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    clearSuccess();
    setIsFormOpen(false);
    setTitle("");
    setDescription("");
    setPriority("media");
    setIsEditing(false);
    setEditingTask(null);
    setShowSuccess(false);
  }, [clearSuccess]);

  const handleSubmit = useCallback(() => {
    if (!title.trim()) {
      Alert.alert("Validación", "El título es obligatorio.");
      return;
    }
    if (isEditing) {
      updateMutation.mutate();
    } else {
      createMutation.mutate();
    }
  }, [title, isEditing, createMutation, updateMutation]);

  const handleToggle = useCallback(
    (task: Task) => {
      toggleMutation.mutate({ id: task.id, completed: !task.completed });
    },
    [toggleMutation]
  );

  const confirmDelete = useCallback(() => {
    if (!taskToDelete) return;
    deleteMutation.mutate(taskToDelete.id);
  }, [taskToDelete, deleteMutation]);

  return {
    tasks: tasksQuery.data ?? [],
    isLoading: tasksQuery.isLoading,
    isFormOpen,
    isEditing,
    title,
    description,
    priority,
    showSuccess,
    isSaving:
      createMutation.status === "pending" ||
      updateMutation.status === "pending",
    isDeleting: deleteMutation.status === "pending",
    taskToDelete,
    openCreateForm,
    openEditForm,
    closeForm,
    setTitle,
    setDescription,
    setPriority,
    handleSubmit,
    handleToggle,
    openDeleteDialog: setTaskToDelete,
    closeDeleteDialog: () => setTaskToDelete(null),
    confirmDelete,
  };
};