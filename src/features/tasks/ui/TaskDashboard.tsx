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
// 1. Asegúrate de importar el GlowOrb
import { GlowOrb } from "@/shared/ui/GlowOrb";

const PRIORITY_COLORS: Record<Priority, string> = {
  alta: "#EF4444",
  media: "#F59E0B",
  baja: "#10B981",
};

const PRIORITY_BG: Record<Priority, string> = {
  alta: "#FEF2F2",
  media: "#FFFBEB",
  baja: "#F0FDF4",
};

const PRIORITY_LABELS: Record<Priority, string> = {
  alta: "Alta",
  media: "Media",
  baja: "Baja",
};

const PRIORITY_EMOJI: Record<Priority, string> = {
  alta: "🔴",
  media: "🟡",
  baja: "🟢",
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

      {task.description ? (
        <Text color="#64748B" fontSize={13} numberOfLines={2} lineHeight={20}>
          {task.description}
        </Text>
      ) : null}

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
  const done = tasks.filter((t) => t.completed).length;

  return (
    <YStack flex={1} backgroundColor="#080808" overflow="hidden">
      {/* ── Luces de fondo (GlowOrbs importados de tu Login) ── */}
      <GlowOrb color="rgb(65, 50, 101)" size={205} style={{ position: "absolute", top: -100, left: -100, opacity: 0.8 }} />
      {/* <GlowOrb color="rgba(93,101,50,1)" size={200} style={{ position: "absolute", top: -60, right: -70, opacity: 0.8 }} /> */}
      <GlowOrb color="rgba(50, 80, 101, 0.63)" size={660} style={{ position: "absolute", top: 220, alignSelf: "center", left: "20%", opacity: 0.4 }} />

      {/* ── Header ── */}
      <YStack paddingHorizontal="$5" paddingTop="$5" paddingBottom="$4" gap="$4" zIndex={1}>
        <Text 
          fontSize={17} 
          color="#A3A3A3" 
          /* Añadido extra: Fuente de escritura a mano para la fecha */
          style={{ fontFamily: "Caveat", textTransform: "capitalize", letterSpacing: 1 }}
        >
          {new Date().toLocaleDateString("es-EC", { weekday: "long", day: "numeric", month: "long" })}
        </Text>
        <XStack justifyContent="space-between" alignItems="flex-end">
          <Text fontSize={28} fontWeight="800" color="#F5F5F0" letterSpacing={-0.8}>
            Mis <Text color="#C8F03C">Tareas</Text>
          </Text>
          <Button
            onPress={openCreateForm}
            width={42} height={42}
            backgroundColor="#C8F03C"
            borderRadius="$3"
            padding={0}
            pressStyle={{ opacity: 0.8 }}
          >
            <Text color="#080808" fontWeight="800" fontSize={22}>+</Text>
          </Button>
        </XStack>

        {/* Stats */}
        <XStack gap="$2">
          {[
            { num: pending, label: "Pendientes", accent: true },
            { num: done, label: "Listas", accent: false },
            { num: `${tasks.length ? Math.round((done / tasks.length) * 100) : 0}%`, label: "Progreso", accent: false },
          ].map((st) => (
            <YStack
              key={st.label}
              flex={1}
              backgroundColor="rgba(22, 22, 22, 0.6)" // Ligeramente transparente para que el GlowOrb se luzca
              borderWidth={0.5}
              borderColor="rgba(255, 255, 255, 0.07)"
              borderRadius="$4"
              padding="$3"
              gap="$1"
            >
              <Text fontSize={22} fontWeight="800" letterSpacing={-0.5}
                color={st.accent ? "#C8F03C" : "#F5F5F0"}>
                {st.num}
              </Text>
              <Text fontSize={10} fontWeight="700" color="#888"
                letterSpacing={0.6} style={{ textTransform: "uppercase" }}>
                {st.label}
              </Text>
            </YStack>
          ))}
        </XStack>
      </YStack>

      {/* ── Lista ── */}
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingHorizontal: 16, paddingBottom: 32 }}
        zIndex={1}
      >
        {isLoading ? (
          <YStack alignItems="center" padding="$8" gap="$3">
            <Spinner size="large" color="#C8F03C" />
            <Text color="#888" fontSize={13}>Cargando tareas...</Text>
          </YStack>
        ) : tasks.length === 0 ? (
          <YStack alignItems="center" padding="$8" gap="$3" marginTop="$10">
            <LottieView
              source={require("../../../../assets/animations/tasks.json")}
              autoPlay loop
              style={{ width: 160, height: 160 }}
            />
            {/* Añadido extra: Título de estado vacío con letra a mano */}
            <Text 
              color="#F5F5F0" 
              fontSize={24} 
              textAlign="center" 
              style={{ fontFamily: "Caveat" }}
            >
              Hoy es un lienzo en blanco
            </Text>
            <Text color="#888" fontSize={14} textAlign="center" lineHeight={22}>
              Crea tu primera tarea{"\n"}con el botón <Text color="#C8F03C" fontWeight="700">+</Text>
            </Text>
          </YStack>
        ) : (
          tasks.map((task) => {
            const cardBg: Record<Priority, string> = { alta: "rgba(26, 18, 8, 0.8)", media: "rgba(13, 26, 10, 0.8)", baja: "rgba(10, 13, 26, 0.8)" };
            const cardBorder: Record<Priority, string> = { alta: "rgba(61, 46, 10, 0.6)", media: "rgba(26, 61, 18, 0.6)", baja: "rgba(18, 24, 61, 0.6)" };
            const badgeBg: Record<Priority, string> = { alta: "#3D2E0A", media: "#1E3D12", baja: "#12183D" };
            const badgeColor: Record<Priority, string> = { alta: "#F0A830", media: "#C8F03C", baja: "#6090F0" };

            return (
              <Card
                key={task.id}
                padding="$4"
                borderRadius="$5"
                backgroundColor={task.completed ? "rgba(20, 20, 20, 0.8)" : cardBg[task.priority]}
                borderWidth={0.5}
                borderColor={task.completed ? "#1E1E1E" : cardBorder[task.priority]}
                opacity={task.completed ? 0.5 : 1}
              >
                <XStack alignItems="center" gap="$3">
                  {/* Check */}
                  <TouchableOpacity
                    onPress={() => handleToggle(task)}
                    style={{
                      width: 24, height: 24, borderRadius: 12,
                      backgroundColor: task.completed ? "#C8F03C" : "transparent",
                      borderWidth: task.completed ? 0 : 1.5,
                      borderColor: "#444",
                      alignItems: "center", justifyContent: "center",
                    }}
                  >
                    {task.completed && <Text style={{ fontSize: 12, color: "#080808", fontWeight: "800" }}>✓</Text>}
                  </TouchableOpacity>

                  {/* Info */}
                  <YStack flex={1} gap="$1">
                    <Text
                      fontSize={14} fontWeight="700" color={task.completed ? "#666" : "#F5F5F0"}
                      letterSpacing={-0.2}
                      textDecorationLine={task.completed ? "line-through" : "none"}
                    >
                      {task.title}
                    </Text>
                    {task.description ? (
                      <Text color="#888" fontSize={12} numberOfLines={1}>{task.description}</Text>
                    ) : null}
                  </YStack>

                  {/* Right */}
                  <YStack alignItems="flex-end" gap="$2">
                    <XStack
                      backgroundColor={badgeBg[task.priority]}
                      paddingHorizontal="$2" paddingVertical="$1"
                      borderRadius="$10"
                    >
                      <Text fontSize={10} fontWeight="800" color={badgeColor[task.priority]}
                        letterSpacing={0.5} style={{ textTransform: "uppercase" }}>
                        {task.priority}
                      </Text>
                    </XStack>
                    <XStack gap="$1">
                      <Button size="$2" onPress={() => openEditForm(task)}
                        backgroundColor="#1A1A1A" borderWidth={0} borderRadius="$2" pressStyle={{ opacity: 0.7 }}>
                        <Text fontSize={11}>✏️</Text>
                      </Button>
                      <Button size="$2" onPress={() => openDeleteDialog(task)}
                        backgroundColor="#1A1A1A" borderWidth={0} borderRadius="$2" pressStyle={{ opacity: 0.7 }}>
                        <Text fontSize={11}>🗑️</Text>
                      </Button>
                    </XStack>
                  </YStack>
                </XStack>
              </Card>
            );
          })
        )}
      </ScrollView>

      {/* ── Sheet formulario ── */}
      <Sheet
        open={isFormOpen}
        onOpenChange={(o) => { if (!o) closeForm(); }}
        modal dismissOnSnapToBottom
      >
        <Sheet.Overlay backgroundColor="rgba(0,0,0,0.75)" />
        <Sheet.Frame
          borderTopLeftRadius="$6" borderTopRightRadius="$6"
          padding="$5" backgroundColor="#080808"
          borderTopWidth={0.5} borderTopColor="#2A2A2A"
        >
          <Sheet.Handle marginBottom="$4" backgroundColor="#2A2A2A" />
          <YStack gap="$4">
            {isSaving || showSuccess ? (
              <YStack alignItems="center" justifyContent="center" minHeight={260} gap="$3">
                <LottieView
                  source={showSuccess
                    ? require("../../../../assets/animations/success.json")
                    : require("../../../../assets/animations/loading.json")}
                  autoPlay loop={!showSuccess}
                  style={{ width: 120, height: 120 }}
                />
                <Text fontSize={18} fontWeight="800" color="#F5F5F0" letterSpacing={-0.4}>
                  {showSuccess
                    ? isEditing ? "¡Tarea actualizada!" : "¡Tarea creada!"
                    : isEditing ? "Actualizando..." : "Creando..."}
                </Text>
                {showSuccess && <Text color="#888" fontSize={13}>Cerrando en breve...</Text>}
              </YStack>
            ) : (
              <>
                <Text fontSize={22} fontWeight="800" color="#F5F5F0" letterSpacing={-0.6}>
                  {isEditing ? "Editar " : "Nueva "}
                  <Text color="#C8F03C">{isEditing ? "tarea" : "tarea"}</Text>
                </Text>

                <YStack gap="$2">
                  <Text color="#888" fontSize={10} fontWeight="700" letterSpacing={1}
                    style={{ textTransform: "uppercase" }}>Título *</Text>
                  <Input
                    value={title} onChangeText={setTitle}
                    placeholder="¿Qué necesitas hacer?"
                    backgroundColor="#161616" color="#F5F5F0"
                    placeholderTextColor="#666"
                    borderColor="#2A2A2A" borderWidth={0.5}
                    borderRadius="$3" padding="$3"
                    focusStyle={{ borderColor: "#C8F03C" }}
                  />
                </YStack>

                <YStack gap="$2">
                  <Text color="#888" fontSize={10} fontWeight="700" letterSpacing={1}
                    style={{ textTransform: "uppercase" }}>Descripción</Text>
                  <TextArea
                    value={description} onChangeText={setDescription}
                    placeholder="Detalles opcionales..."
                    backgroundColor="#161616" color="#F5F5F0"
                    placeholderTextColor="#666"
                    borderColor="#2A2A2A" borderWidth={0.5}
                    borderRadius="$3" padding="$3" minHeight={80}
                    focusStyle={{ borderColor: "#C8F03C" }}
                  />
                </YStack>

                <YStack gap="$2">
                  <Text color="#888" fontSize={10} fontWeight="700" letterSpacing={1}
                    style={{ textTransform: "uppercase" }}>Prioridad</Text>
                  <XStack gap="$2">
                    {(["baja", "media", "alta"] as Priority[]).map((p) => {
                      const activeColors: Record<Priority, { bg: string; text: string }> = {
                        baja: { bg: "#12183D", text: "#6090F0" },
                        media: { bg: "#C8F03C", text: "#080808" },
                        alta: { bg: "#3D2E0A", text: "#F0A830" },
                      };
                      const isActive = priority === p;
                      return (
                        <TouchableOpacity
                          key={p}
                          onPress={() => setPriority(p)}
                          style={{
                            flex: 1, borderRadius: 100,
                            paddingVertical: 10, alignItems: "center",
                            backgroundColor: isActive ? activeColors[p].bg : "#161616",
                            borderWidth: 0.5,
                            borderColor: isActive ? activeColors[p].bg : "#2A2A2A",
                          }}
                        >
                          <Text style={{
                            fontSize: 12, fontWeight: "800",
                            color: isActive ? activeColors[p].text : "#888",
                            textTransform: "uppercase", letterSpacing: 0.5,
                          }}>
                            {p}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </XStack>
                </YStack>

                <XStack gap="$3" marginTop="$2">
                  <Button flex={1} size="$4"
                    backgroundColor="#161616" borderWidth={0.5} borderColor="#2A2A2A"
                    borderRadius="$4" onPress={closeForm} pressStyle={{ opacity: 0.7 }}>
                    <Text color="#888" fontWeight="700">Cancelar</Text>
                  </Button>
                  <Button flex={1} size="$4"
                    backgroundColor="#C8F03C" borderRadius="$4"
                    onPress={handleSubmit} disabled={isSaving} pressStyle={{ opacity: 0.8 }}>
                    <Text color="#080808" fontWeight="800">
                      {isEditing ? "Actualizar" : "Crear →"}
                    </Text>
                  </Button>
                </XStack>
              </>
            )}
          </YStack>
        </Sheet.Frame>
      </Sheet>

      {/* ── Dialog eliminar ── */}
      <AlertDialog
        open={Boolean(taskToDelete)}
        onOpenChange={(o) => { if (!o) closeDeleteDialog(); }}
      >
        <AlertDialog.Portal>
          <AlertDialog.Overlay opacity={0.7} backgroundColor="black" />
          <AlertDialog.Content
            padding="$5" borderRadius="$6"
            backgroundColor="#080808"
            borderWidth={0.5} borderColor="#2A2A2A"
            width="90%" maxWidth={400}
          >
            <YStack gap="$4">
              <YStack gap="$1">
                <AlertDialog.Title color="#F5F5F0" fontSize={18} fontWeight="800" letterSpacing={-0.4}>
                  Eliminar tarea
                </AlertDialog.Title>
                <AlertDialog.Description color="#888" fontSize={14} lineHeight={22}>
                  <Text color="#888" fontSize={14}>
                    {`¿Eliminar "${taskToDelete?.title}"? Esta acción no se puede deshacer.`}
                  </Text>
                </AlertDialog.Description>
              </YStack>
              <XStack justifyContent="flex-end" gap="$3">
                <AlertDialog.Cancel asChild>
                  <Button size="$4"
                    backgroundColor="#161616" borderWidth={0.5} borderColor="#2A2A2A"
                    borderRadius="$4" onPress={closeDeleteDialog} pressStyle={{ opacity: 0.7 }}>
                    <Text color="#888" fontWeight="700">Cancelar</Text>
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button size="$4"
                    backgroundColor="#3D1414" borderRadius="$4"
                    onPress={confirmDelete} disabled={isDeleting} pressStyle={{ opacity: 0.8 }}>
                    <Text color="#E05555" fontWeight="800">
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