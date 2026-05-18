export type Priority = "alta" | "media" | "baja";

export type Task = {
  id: string;
  user_id: string;
  title: string;
  description?: string;
  priority: Priority;
  completed: boolean;
  created_at: string;
};