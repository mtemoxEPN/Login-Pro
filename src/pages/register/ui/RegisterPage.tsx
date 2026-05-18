import { useState } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
  Alert, TouchableOpacity, ScrollView, StatusBar,
} from "react-native";
import { router } from "expo-router";
import { useRegister } from "@/features/auth/model/useRegister";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { theme } from "@/core/styles/theme";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [success, setSuccess] = useState(false);
  const register = useRegister();

  const isPasswordValid = (p: string) =>
    p.length >= 8 && /[A-Z]/.test(p) && /[a-z]/.test(p) && /[^A-Za-z0-9]/.test(p);

  const handleRegister = async () => {
    if (!email || !password || !confirm) {
      Alert.alert("Campos requeridos", "Completa todos los campos.");
      return;
    }
    if (!isPasswordValid(password)) {
      Alert.alert("Contraseña débil", "Debe tener 8+ caracteres, mayúscula, minúscula y carácter especial.");
      return;
    }
    if (password !== confirm) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    try {
      await register.mutateAsync({ email, password });
      setSuccess(true);
    } catch (err: any) {
      Alert.alert("Error al registrarse", err.message);
    }
  };

  if (success) {
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <View style={styles.successContainer}>
          <View style={styles.successIconWrap}>
            <Text style={styles.successIcon}>📬</Text>
          </View>
          <Text style={styles.successTitle}>¡Revisa tu email!</Text>
          <Text style={styles.successText}>
            Enviamos un link de confirmación a{" "}
            <Text style={{ fontWeight: "700", color: theme.colors.primary }}>{email}</Text>.
            {"\n"}Confírmalo para poder iniciar sesión.
          </Text>
          <TouchableOpacity onPress={() => router.back()} style={styles.successBtn}>
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
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Hero */}
          <View style={styles.hero}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoEmoji}>✨</Text>
            </View>
            <Text style={styles.appName}>Crear cuenta</Text>
            <Text style={styles.tagline}>Únete a ESFOT Auth</Text>
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
            <Input
              label="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Mínimo 8 caracteres"
              showPasswordPolicy
            />
            <Input
              label="Confirmar contraseña"
              value={confirm}
              onChangeText={setConfirm}
              secureTextEntry
              placeholder="Repite tu contraseña"
            />
            <Button
              onPress={handleRegister}
              isLoading={register.isPending}
              label="Crear cuenta"
            />
          </View>

          {/* Footer */}
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.footerRow}
          >
            <Text style={styles.footerText}>
              ¿Ya tienes cuenta?{" "}
              <Text style={styles.footerLink}>Inicia sesión</Text>
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 40,
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
    fontSize: 28,
    fontWeight: "800",
    color: theme.colors.text,
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  tagline: {
    fontSize: 15,
    color: theme.colors.textMuted,
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
  footerRow: {
    alignItems: "center",
    marginTop: 28,
  },
  footerText: {
    color: theme.colors.textMuted,
    fontSize: 14,
  },
  footerLink: {
    color: theme.colors.primary,
    fontWeight: "700",
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
    backgroundColor: "#F0FDF4",
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