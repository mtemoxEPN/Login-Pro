import { useTasks } from "@/features/tasks/model/useTasks";
import { Priority, Task } from "@/features/tasks/model/types";
import LottieView from "lottie-react-native";
import {
  AlertDialog,
  Button,
  Card,
  Input,
  ScrollView,
  Sheet,
  Spinner,
  Text,
  TextArea,
  XStack,
  YStack,
} from "tamagui";
import { TouchableOpacity } from "react-native";

const PRIORITY_COLORS: Record<Priority, string> = {
  alta:  "#EF4444",
  media: "#F59E0B",
  baja:  "#10B981",
};

const PRIORITY_BG: Record<Priority, string> = {
  alta:  "#FEF2F2",
  media: "#FFFBEB",
  baja:  "#F0FDF4",
};

const PRIORITY_LABELS: Record<Priority, string> = {
  alta:  "Alta",
  media: "Media",
  baja:  "Baja",
};

const PRIORITY_EMOJI: Record<Priority, string> = {
  alta:  "🔴",
  media: "🟡",
  baja:  "🟢",
};

const PrioritySelector = ({
  value,
  onChange,
}: {
  value: Priority;
  onChange: (p: Priority) => void;
}) => (
  <XStack gap="$2" flexWrap="wrap">
    {(["alta", "media", "baja"] as Priority[]).map((p) => (
      <TouchableOpacity
        key={p}
        onPress={() => onChange(p)}
        style={{
          paddingHorizontal: 16,
          paddingVertical: 9,
          borderRadius: 20,
          backgroundColor: value === p ? PRIORITY_COLORS[p] : "#F8FAFC",
          borderWidth: 1.5,
          borderColor: value === p ? PRIORITY_COLORS[p] : "#E2E8F0",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text fontSize={12}>{PRIORITY_EMOJI[p]}</Text>
        <Text
          color={value === p ? "#fff" : "#64748B"}
          fontWeight="700"
          fontSize={13}
        >
          {PRIORITY_LABELS[p]}
        </Text>
      </TouchableOpacity>
    ))}
  </XStack>
);

const TaskCard = ({
  task,
  onEdit,
  onDelete,
  onToggle,
}: {
  task: Task;
  onEdit: (t: Task) => void;
  onDelete: (t: Task) => void;
  onToggle: (t: Task) => void;
}) => (
  <Card
    padding="$4"
    borderRadius="$4"
    backgroundColor="#FFFFFF"
    borderWidth={1.5}
    borderColor={task.completed ? "#E2E8F0" : PRIORITY_COLORS[task.priority] + "33"}
    borderLeftWidth={4}
    borderLeftColor={task.completed ? "#E2E8F0" : PRIORITY_COLORS[task.priority]}
    shadowColor="#64748B"
    shadowOpacity={0.06}
    shadowRadius={8}
    shadowOffset={{ width: 0, height: 2 }}
    elevation={2}
    opacity={task.completed ? 0.65 : 1}
  >
    <YStack gap="$2">
      {/* Título + badge prioridad */}
      <XStack justifyContent="space-between" alignItems="flex-start">
        <Text
          fontSize={15}
          fontWeight="700"
          color={task.completed ? "#94A3B8" : "#0F172A"}
          textDecorationLine={task.completed ? "line-through" : "none"}
          flex={1}
          marginRight="$2"
          lineHeight={22}
        >
          {task.title}
        </Text>
        <XStack
          backgroundColor={task.completed ? "#F1F5F9" : PRIORITY_BG[task.priority]}
          paddingHorizontal="$2"
          paddingVertical="$1"
          borderRadius="$10"
          alignItems="center"
          gap="$1"
        >
          <Text fontSize={10}>{PRIORITY_EMOJI[task.priority]}</Text>
          <Text
            fontSize={10}
            fontWeight="700"
            color={task.completed ? "#94A3B8" : PRIORITY_COLORS[task.priority]}
          >
            {PRIORITY_LABELS[task.priority].toUpperCase()}
          </Text>
        </XStack>
      </XStack>

      {/* Descripción */}
      {task.description ? (
        <Text color="#64748B" fontSize={13} numberOfLines={2} lineHeight={20}>
          {task.description}
        </Text>
      ) : null}

      {/* Acciones */}
      <XStack
        justifyContent="space-between"
        alignItems="center"
        marginTop="$2"
        flexWrap="wrap"
        gap="$2"
      >
        <TouchableOpacity
          onPress={() => onToggle(task)}
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            paddingHorizontal: 12,
            paddingVertical: 7,
            borderRadius: 20,
            backgroundColor: task.completed ? "#F0FDF4" : "#F8FAFC",
            borderWidth: 1,
            borderColor: task.completed ? "#10B981" : "#E2E8F0",
          }}
        >
          <Text fontSize={12} fontWeight="700" color={task.completed ? "#10B981" : "#64748B"}>
            {task.completed ? "✅ Completada" : "⬜ Pendiente"}
          </Text>
        </TouchableOpacity>

        <XStack gap="$2">
          <Button
            size="$3"
            onPress={() => onEdit(task)}
            backgroundColor="#EFF6FF"
            borderWidth={0}
            borderRadius="$10"
            pressStyle={{ opacity: 0.7 }}
          >
            <Text color="#2563EB" fontSize={12} fontWeight="600">✏️ Editar</Text>
          </Button>
          <Button
            size="$3"
            onPress={() => onDelete(task)}
            backgroundColor="#FEF2F2"
            borderWidth={0}
            borderRadius="$10"
            pressStyle={{ opacity: 0.7 }}
          >
            <Text color="#EF4444" fontSize={12} fontWeight="600">🗑️</Text>
          </Button>
        </XStack>
      </XStack>
    </YStack>
  </Card>
);

export const TaskDashboard = () => {
  const {
    tasks, isLoading, isFormOpen, isEditing,
    title, description, priority, showSuccess, isSaving, isDeleting,
    taskToDelete, openCreateForm, openEditForm, closeForm,
    setTitle, setDescription, setPriority,
    handleSubmit, handleToggle, openDeleteDialog, closeDeleteDialog, confirmDelete,
  } = useTasks();

  const pending = tasks.filter((t) => !t.completed).length;
  const done    = tasks.filter((t) => t.completed).length;

  return (
    <YStack flex={1} padding="$4" gap="$4" backgroundColor="#FFFFFF">

      {/* Header */}
      <XStack justifyContent="space-between" alignItems="center">
        <YStack gap="$1">
          <Text fontSize={22} fontWeight="800" color="#0F172A" letterSpacing={-0.5}>
            Mis Tareas
          </Text>
          <XStack gap="$2" alignItems="center">
            <XStack
              backgroundColor="#FFF7ED"
              paddingHorizontal="$2"
              paddingVertical="$1"
              borderRadius="$10"
            >
              <Text color="#F59E0B" fontSize={12} fontWeight="700">
                {pending} pendientes
              </Text>
            </XStack>
            <XStack
              backgroundColor="#F0FDF4"
              paddingHorizontal="$2"
              paddingVertical="$1"
              borderRadius="$10"
            >
              <Text color="#10B981" fontSize={12} fontWeight="700">
                {done} listas
              </Text>
            </XStack>
          </XStack>
        </YStack>

        <Button
          onPress={openCreateForm}
          size="$3"
          backgroundColor="#2563EB"
          borderRadius="$10"
          paddingHorizontal="$4"
          pressStyle={{ opacity: 0.8 }}
        >
          <Text color="#fff" fontWeight="700" fontSize={14}>+ Nueva</Text>
        </Button>
      </XStack>

      {/* Lista */}
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingBottom: 32 }}
      >
        {isLoading ? (
          <YStack alignItems="center" padding="$8" gap="$3">
            <Spinner size="large" color="#2563EB" />
            <Text color="#94A3B8" fontSize={14}>Cargando tareas...</Text>
          </YStack>
        ) : tasks.length === 0 ? (
          <YStack alignItems="center" padding="$8" gap="$3">
            <LottieView
              source={require("../../../../assets/animations/tasks.json")}
              autoPlay
              loop
              style={{ width: 180, height: 180 }}
            />
            <Text color="#0F172A" fontSize={17} fontWeight="700" textAlign="center">
              Sin tareas aún
            </Text>
            <Text color="#94A3B8" fontSize={14} textAlign="center" lineHeight={22}>
              Crea tu primera tarea{"\n"}tocando el botón + Nueva
            </Text>
          </YStack>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={openEditForm}
              onDelete={openDeleteDialog}
              onToggle={handleToggle}
            />
          ))
        )}
      </ScrollView>

      {/* Sheet formulario */}
      <Sheet
        open={isFormOpen}
        onOpenChange={(o) => { if (!o) closeForm(); }}
        modal
        dismissOnSnapToBottom
      >
        <Sheet.Overlay backgroundColor="rgba(0,0,0,0.25)" />
        <Sheet.Frame
          borderTopLeftRadius="$6"
          borderTopRightRadius="$6"
          padding="$5"
          backgroundColor="#FFFFFF"
        >
          <Sheet.Handle marginBottom="$4" backgroundColor="#E2E8F0" />
          <YStack gap="$4">
            {isSaving || showSuccess ? (
              <YStack alignItems="center" justifyContent="center" minHeight={260} gap="$3">
                <LottieView
                  source={
                    showSuccess
                      ? require("../../../../assets/animations/success.json")
                      : require("../../../../assets/animations/loading.json")
                  }
                  autoPlay
                  loop={!showSuccess}
                  style={{ width: 140, height: 140 }}
                />
                <Text fontSize={17} fontWeight="700" color="#0F172A">
                  {showSuccess
                    ? isEditing ? "¡Tarea actualizada!" : "¡Tarea creada!"
                    : isEditing ? "Actualizando..." : "Creando tarea..."}
                </Text>
                {showSuccess && (
                  <Text color="#94A3B8" fontSize={13}>Cerrando en breve...</Text>
                )}
              </YStack>
            ) : (
              <>
                <Text fontSize={19} fontWeight="800" color="#0F172A" letterSpacing={-0.5}>
                  {isEditing ? "Editar tarea" : "Nueva tarea"}
                </Text>

                <YStack gap="$2">
                  <Text color="#334155" fontSize={13} fontWeight="600">Título *</Text>
                  <Input
                    value={title}
                    onChangeText={setTitle}
                    placeholder="¿Qué necesitas hacer?"
                    backgroundColor="#F8FAFC"
                    color="#0F172A"
                    placeholderTextColor="#94A3B8"
                    borderColor="#E2E8F0"
                    borderWidth={1.5}
                    borderRadius="$3"
                    padding="$3"
                    focusStyle={{ borderColor: "#2563EB" }}
                  />
                </YStack>

                <YStack gap="$2">
                  <Text color="#334155" fontSize={13} fontWeight="600">Descripción</Text>
                  <TextArea
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Detalles opcionales..."
                    backgroundColor="#F8FAFC"
                    color="#0F172A"
                    placeholderTextColor="#94A3B8"
                    borderColor="#E2E8F0"
                    borderWidth={1.5}
                    borderRadius="$3"
                    padding="$3"
                    minHeight={90}
                    focusStyle={{ borderColor: "#2563EB" }}
                  />
                </YStack>

                <YStack gap="$2">
                  <Text color="#334155" fontSize={13} fontWeight="600">Prioridad</Text>
                  <PrioritySelector value={priority} onChange={setPriority} />
                </YStack>

                <XStack gap="$3" marginTop="$2">
                  <Button
                    flex={1}
                    onPress={closeForm}
                    backgroundColor="#F8FAFC"
                    borderWidth={1}
                    borderColor="#E2E8F0"
                    borderRadius="$4"
                    size="$4"
                    pressStyle={{ opacity: 0.7 }}
                  >
                    <Text color="#64748B" fontWeight="600">Cancelar</Text>
                  </Button>
                  <Button
                    flex={1}
                    onPress={handleSubmit}
                    disabled={isSaving}
                    backgroundColor="#2563EB"
                    borderRadius="$4"
                    size="$4"
                    pressStyle={{ opacity: 0.8 }}
                  >
                    <Text color="#fff" fontWeight="700">
                      {isEditing ? "Actualizar" : "Crear tarea"}
                    </Text>
                  </Button>
                </XStack>
              </>
            )}
          </YStack>
        </Sheet.Frame>
      </Sheet>

      {/* Dialog eliminar */}
      <AlertDialog
        open={Boolean(taskToDelete)}
        onOpenChange={(o) => { if (!o) closeDeleteDialog(); }}
      >
        <AlertDialog.Portal>
          <AlertDialog.Overlay opacity={0.3} backgroundColor="black" />
          <AlertDialog.Content
            padding="$5"
            borderRadius="$6"
            backgroundColor="#FFFFFF"
            borderWidth={1}
            borderColor="#E2E8F0"
            width="90%"
            maxWidth={400}
            shadowColor="#64748B"
            shadowOpacity={0.12}
            shadowRadius={24}
            shadowOffset={{ width: 0, height: 8 }}
            elevation={8}
          >
            <YStack gap="$4">
              <YStack gap="$1">
                <AlertDialog.Title color="#0F172A" fontSize={18} fontWeight="800">
                  Eliminar tarea
                </AlertDialog.Title>
                <AlertDialog.Description color="#64748B" fontSize={14} lineHeight={22}>
                  <Text color="#64748B" fontSize={14}>
                    {`¿Eliminar "${taskToDelete?.title}"? Esta acción no se puede deshacer.`}
                  </Text>
                </AlertDialog.Description>
              </YStack>

              <XStack justifyContent="flex-end" gap="$3">
                <AlertDialog.Cancel asChild>
                  <Button
                    size="$4"
                    backgroundColor="#F8FAFC"
                    borderWidth={1}
                    borderColor="#E2E8F0"
                    borderRadius="$4"
                    onPress={closeDeleteDialog}
                    pressStyle={{ opacity: 0.7 }}
                  >
                    <Text color="#64748B" fontWeight="600">Cancelar</Text>
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button
                    size="$4"
                    backgroundColor="#EF4444"
                    borderRadius="$4"
                    onPress={confirmDelete}
                    disabled={isDeleting}
                    pressStyle={{ opacity: 0.8 }}
                  >
                    <Text color="#fff" fontWeight="700">
                      {isDeleting ? "Eliminando..." : "Eliminar"}
                    </Text>
                  </Button>
                </AlertDialog.Action>
              </XStack>
            </YStack>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog>
    </YStack>
  );
};