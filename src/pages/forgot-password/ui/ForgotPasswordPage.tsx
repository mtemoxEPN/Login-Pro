import { useState } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
  Alert, TouchableOpacity, StatusBar,
} from "react-native";
import { router } from "expo-router";
import { useForgotPassword } from "@/features/auth/model/useForgotPassword";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { theme } from "@/core/styles/theme";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const forgotPassword = useForgotPassword();

  const handleSend = async () => {
    if (!email) {
      Alert.alert("Campo requerido", "Ingresa tu correo electrónico.");
      return;
    }
    try {
      await forgotPassword.mutateAsync(email);
      setSuccess(true);
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };

  if (success) {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.successContainer}>
          <View style={styles.successIconWrap}>
            <Text style={styles.successIcon}>📧</Text>
          </View>
          <Text style={styles.successTitle}>¡Email enviado!</Text>
          <Text style={styles.successText}>
            Revisa tu bandeja en{" "}
            <Text style={{ fontWeight: "700", color: theme.colors.primary }}>{email}</Text>.
            {"\n"}Haz clic en el link para restablecer tu contraseña.
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(auth)/login")}
            style={styles.successBtn}
          >
            <Text style={styles.successBtnText}>← Volver al login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inner}>
          {/* Back */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backText}>← Volver</Text>
          </TouchableOpacity>

          {/* Hero */}
          <View style={styles.hero}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoEmoji}>🔑</Text>
            </View>
            <Text style={styles.appName}>¿Olvidaste tu contraseña?</Text>
            <Text style={styles.tagline}>
              Ingresa tu correo y te enviaremos{"\n"}un link para restablecerla
            </Text>
          </View>

          {/* Card */}
          <View style={styles.card}>
            <Input
              label="Correo electrónico"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              placeholder="tu@correo.com"
            />
            <Button
              onPress={handleSend}
              isLoading={forgotPassword.isPending}
              label="Enviar instrucciones"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  backBtn: {
    position: "absolute",
    top: 56,
    left: 24,
  },
  backText: {
    color: theme.colors.primary,
    fontSize: 15,
    fontWeight: "600",
  },
  hero: {
    alignItems: "center",
    marginBottom: 32,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFF7ED",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    ...theme.shadow.subtle,
  },
  logoEmoji: { fontSize: 36 },
  appName: {
    fontSize: 24,
    fontWeight: "800",
    color: theme.colors.text,
    letterSpacing: -0.5,
    marginBottom: 8,
    textAlign: "center",
  },
  tagline: {
    fontSize: 14,
    color: theme.colors.textMuted,
    textAlign: "center",
    lineHeight: 22,
  },
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.xl,
    padding: 24,
    gap: 16,
    borderWidth: 1,
    borderColor: theme.colors.border,
    ...theme.shadow.card,
  },
  // Success
  successContainer: {
    flex: 1,
    backgroundColor: theme.colors.bg,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  successIconWrap: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: theme.colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    ...theme.shadow.subtle,
  },
  successIcon: { fontSize: 48 },
  successTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: theme.colors.text,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  successText: {
    fontSize: 15,
    color: theme.colors.textMid,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 32,
  },
  successBtn: {
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: theme.radius.full,
  },
  successBtnText: {
    color: theme.colors.primary,
    fontWeight: "700",
    fontSize: 15,
  },
});