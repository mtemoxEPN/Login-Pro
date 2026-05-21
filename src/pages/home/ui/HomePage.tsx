import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "@/features/session/model/useSession";
import { supabase } from "@/shared/api/supabase";
import { TaskDashboard } from "@/features/tasks/ui/TaskDashboard";
import {
  Button,
  Input,
  Sheet,
  Text,
  XStack,
  YStack,
} from "tamagui";

export const HomePage = () => {
  const { user, signOut } = useSession();

  const [isPasswordSheetOpen, setIsPasswordSheetOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChanging, setIsChanging] = useState(false);

  const handleSignOut = () => {
    Alert.alert("Cerrar sesión", "¿Estás seguro de que deseas salir?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Salir", style: "destructive", onPress: () => signOut() },
    ]);
  };

  const handleChangePassword = async () => {
    if (!newPassword || !confirmPassword) {
      Alert.alert("Error", "Completa todos los campos.");
      return;
    }
    if (newPassword.length < 8) {
      Alert.alert("Error", "La contraseña debe tener mínimo 8 caracteres.");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    setIsChanging(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      Alert.alert("¡Éxito!", "Tu contraseña ha sido actualizada.");
      setIsPasswordSheetOpen(false);
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      Alert.alert("Error", err.message ?? "No se pudo cambiar la contraseña.");
    } finally {
      setIsChanging(false);
    }
  };

  const isGoogleUser = user?.app_metadata?.provider === "google";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0D0D0D" }}>
      <YStack flex={1} backgroundColor="#0D0D0D">

        {/* ── Topbar ── */}
        <XStack
          paddingHorizontal="$5"
          paddingVertical="$4"
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth={0.5}
          borderBottomColor="#1E1E1E"
        >
          <YStack gap="$1">
            <Text fontSize={10} fontWeight="700" color="#555" letterSpacing={1} style={{ textTransform: "uppercase" }}>
              Sesión activa
            </Text>
            <Text fontSize={14} fontWeight="700" color="#F5F5F0" numberOfLines={1}>
              {user?.email ?? "Usuario"}
            </Text>
          </YStack>

          <XStack gap="$2">
            {!isGoogleUser && (
              <Button
                size="$3"
                onPress={() => setIsPasswordSheetOpen(true)}
                backgroundColor="#1E2A14"
                borderWidth={0}
                borderRadius="$10"
                pressStyle={{ opacity: 0.7 }}
              >
                <Text color="#C8F03C" fontSize={12} fontWeight="700">Contraseña</Text>
              </Button>
            )}
            <Button
              size="$3"
              onPress={handleSignOut}
              backgroundColor="#1E1414"
              borderWidth={0}
              borderRadius="$10"
              pressStyle={{ opacity: 0.7 }}
            >
              <Text color="#E05555" fontSize={12} fontWeight="700">Salir</Text>
            </Button>
          </XStack>
        </XStack>

        {/* ── CRUD ── */}
        <TaskDashboard />

        {/* ── Sheet cambio contraseña ── */}
        <Sheet
          open={isPasswordSheetOpen}
          onOpenChange={(o) => {
            if (!o) { setIsPasswordSheetOpen(false); setNewPassword(""); setConfirmPassword(""); }
          }}
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Overlay backgroundColor="rgba(0,0,0,0.7)" />
          <Sheet.Frame
            borderTopLeftRadius="$6"
            borderTopRightRadius="$6"
            padding="$5"
            backgroundColor="#0D0D0D"
            borderTopWidth={0.5}
            borderTopColor="#2A2A2A"
          >
            <Sheet.Handle marginBottom="$4" backgroundColor="#2A2A2A" />
            <YStack gap="$4">
              <YStack gap="$1">
                <Text fontSize={22} fontWeight="800" color="#F5F5F0" letterSpacing={-0.6}>
                  Cambiar <Text color="#C8F03C">contraseña</Text>
                </Text>
                <Text color="#555" fontSize={13}>
                  Mínimo 8 caracteres.
                </Text>
              </YStack>

              <YStack gap="$2">
                <Text color="#666" fontSize={10} fontWeight="700" letterSpacing={1} style={{ textTransform: "uppercase" }}>
                  Nueva contraseña
                </Text>
                <Input
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="Mínimo 8 caracteres"
                  secureTextEntry
                  backgroundColor="#161616"
                  color="#F5F5F0"
                  placeholderTextColor="#444"
                  borderColor="#2A2A2A"
                  borderWidth={0.5}
                  borderRadius="$3"
                  padding="$3"
                  focusStyle={{ borderColor: "#C8F03C" }}
                />
              </YStack>

              <YStack gap="$2">
                <Text color="#666" fontSize={10} fontWeight="700" letterSpacing={1} style={{ textTransform: "uppercase" }}>
                  Confirmar contraseña
                </Text>
                <Input
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Repite la contraseña"
                  secureTextEntry
                  backgroundColor="#161616"
                  color="#F5F5F0"
                  placeholderTextColor="#444"
                  borderColor="#2A2A2A"
                  borderWidth={0.5}
                  borderRadius="$3"
                  padding="$3"
                  focusStyle={{ borderColor: "#C8F03C" }}
                />
              </YStack>

              <XStack gap="$3" marginTop="$2">
                <Button
                  flex={1} size="$4"
                  backgroundColor="#161616"
                  borderWidth={0.5} borderColor="#2A2A2A"
                  borderRadius="$4"
                  onPress={() => setIsPasswordSheetOpen(false)}
                  pressStyle={{ opacity: 0.7 }}
                >
                  <Text color="#555" fontWeight="700">Cancelar</Text>
                </Button>
                <Button
                  flex={1} size="$4"
                  backgroundColor="#C8F03C"
                  borderRadius="$4"
                  onPress={handleChangePassword}
                  disabled={isChanging}
                  pressStyle={{ opacity: 0.8 }}
                >
                  <Text color="#0D0D0D" fontWeight="800">
                    {isChanging ? "Cambiando..." : "Actualizar"}
                  </Text>
                </Button>
              </XStack>
            </YStack>
          </Sheet.Frame>
        </Sheet>
      </YStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
});