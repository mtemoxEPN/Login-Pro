import { supabase } from "@/shared/api/supabase";
import { Task, Priority } from "./types";

export const fetchTasksForUser = async (userId: string): Promise<Task[]> => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
};

export const createTask = async (payload: {
  title: string;
  description: string;
  priority: Priority;
  user_id: string;
}): Promise<Task> => {
  const { data, error } = await supabase
    .from("tasks")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateTask = async (payload: {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
}): Promise<Task> => {
  const { data, error } = await supabase
    .from("tasks")
    .update({
      title: payload.title,
      description: payload.description,
      priority: payload.priority,
      completed: payload.completed,
    })
    .eq("id", payload.id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const toggleTaskCompleted = async (
  id: string,
  completed: boolean
): Promise<void> => {
  const { error } = await supabase
    .from("tasks")
    .update({ completed })
    .eq("id", id);

  if (error) throw error;
};

export const deleteTask = async (id: string): Promise<void> => {
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) throw error;
};