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
    <SafeAreaView style={styles.safe}>
      <YStack flex={1} backgroundColor="#FFFFFF">

        {/* Header */}
        <XStack
          paddingHorizontal="$4"
          paddingVertical="$3"
          justifyContent="space-between"
          alignItems="center"
          borderBottomWidth={1}
          borderBottomColor="#E2E8F0"
          backgroundColor="#FFFFFF"
        >
          <YStack gap="$1">
            <Text fontSize={12} color="#94A3B8" fontWeight="500" letterSpacing={0.5}>
              BIENVENIDO 👋
            </Text>
            <Text fontSize={15} fontWeight="700" color="#0F172A" numberOfLines={1}>
              {user?.email ?? "Usuario"}
            </Text>
          </YStack>

          <XStack gap="$2">
            {!isGoogleUser && (
              <Button
                size="$3"
                onPress={() => setIsPasswordSheetOpen(true)}
                backgroundColor="#EFF6FF"
                borderWidth={0}
                borderRadius="$10"
                pressStyle={{ opacity: 0.8 }}
              >
                <Text color="#2563EB" fontSize={12} fontWeight="600">🔑 Contraseña</Text>
              </Button>
            )}
            <Button
              size="$3"
              onPress={handleSignOut}
              backgroundColor="#FEF2F2"
              borderWidth={0}
              borderRadius="$10"
              pressStyle={{ opacity: 0.8 }}
            >
              <Text color="#EF4444" fontSize={12} fontWeight="600">Salir</Text>
            </Button>
          </XStack>
        </XStack>

        {/* CRUD */}
        <TaskDashboard />

        {/* Sheet cambio de contraseña */}
        <Sheet
          open={isPasswordSheetOpen}
          onOpenChange={(o) => {
            if (!o) {
              setIsPasswordSheetOpen(false);
              setNewPassword("");
              setConfirmPassword("");
            }
          }}
          modal
          dismissOnSnapToBottom
        >
          <Sheet.Overlay backgroundColor="rgba(0,0,0,0.3)" />
          <Sheet.Frame
            borderTopLeftRadius="$6"
            borderTopRightRadius="$6"
            padding="$5"
            backgroundColor="#FFFFFF"
          >
            <Sheet.Handle marginBottom="$4" backgroundColor="#E2E8F0" />
            <YStack gap="$4">
              <YStack gap="$1">
                <Text fontSize={20} fontWeight="800" color="#0F172A" letterSpacing={-0.5}>
                  Cambiar contraseña
                </Text>
                <Text color="#64748B" fontSize={13}>
                  Elige una contraseña segura de al menos 8 caracteres.
                </Text>
              </YStack>

              <YStack gap="$2">
                <Text color="#334155" fontSize={13} fontWeight="600">Nueva contraseña</Text>
                <Input
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="Mínimo 8 caracteres"
                  secureTextEntry
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
                <Text color="#334155" fontSize={13} fontWeight="600">Confirmar contraseña</Text>
                <Input
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Repite la contraseña"
                  secureTextEntry
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

              <XStack gap="$3" marginTop="$2">
                <Button
                  flex={1}
                  size="$4"
                  backgroundColor="#F8FAFC"
                  borderWidth={1}
                  borderColor="#E2E8F0"
                  borderRadius="$4"
                  onPress={() => setIsPasswordSheetOpen(false)}
                  pressStyle={{ opacity: 0.7 }}
                >
                  <Text color="#64748B" fontWeight="600">Cancelar</Text>
                </Button>
                <Button
                  flex={1}
                  size="$4"
                  backgroundColor="#2563EB"
                  borderRadius="$4"
                  onPress={handleChangePassword}
                  disabled={isChanging}
                  pressStyle={{ opacity: 0.8 }}
                >
                  <Text color="#fff" fontWeight="700">
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