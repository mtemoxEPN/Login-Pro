import { useState } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView, TextInput,
  Alert, TouchableOpacity, ScrollView, StatusBar, ActivityIndicator,
} from "react-native";
import { router } from "expo-router";
import { useRegister } from "@/features/auth/model/useRegister";
import { Input } from "@/shared/ui/Input";
import { GlowOrb } from "@/shared/ui/GlowOrb";
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

  if (success) return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <View style={s.root}>
        <View style={s.successWrap}>
          <View style={s.accentBar} />
          <Text style={s.successEmoji}>📬</Text>
          <Text style={s.successTitle}>
            Revisa tu{"\n"}<Text style={s.accent}>email.</Text>
          </Text>
          <Text style={s.successSub}>
            Enviamos un link de confirmación a{"\n"}
            <Text style={{ color: "#F5F5F0", fontWeight: "700" }}>{email}</Text>
          </Text>
          <TouchableOpacity style={s.outlineBtn} onPress={() => router.back()}>
            <Text style={s.outlineBtnText}>← Volver al login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <KeyboardAvoidingView style={s.root} behavior="padding">
        <ScrollView
          contentContainerStyle={s.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Luces de fondo — igual en Register y ForgotPassword */}
          <GlowOrb color="rgba(160,80,255,1)" size={280} style={{ top: -100, left: -100 }} />
          <GlowOrb color="rgba(200,240,60,1)" size={200} style={{ top: -60, right: -70 }} />
          <GlowOrb color="rgba(100,60,220,1)" size={260} style={{ top: 220, left: "20%" }} />
          
          <View style={s.hero}>
            <View style={s.accentBar} />
            <Text style={s.eyebrow}>ESFOT · Auth</Text>
            <Text style={s.h1}>
              Crear{"\n"}<Text style={s.accent}>cuenta.</Text>
            </Text>
            <Text style={s.tagline}>Únete en segundos</Text>
          </View>

          <View style={s.separator} />

          <View style={s.form}>
            <View style={s.fieldGroup}>
              <Text style={s.fieldLabel}>Correo</Text>
              <TextInput
                style={s.fieldInput}
                value={email}
                onChangeText={setEmail}
                placeholder="tu@correo.com"
                placeholderTextColor="#444"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={s.fieldGroup}>
              <Text style={s.fieldLabel}>Contraseña</Text>
              <Input
                label=""
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholder="Mínimo 8 caracteres"
                showPasswordPolicy
              />
            </View>

            <View style={s.fieldGroup}>
              <Text style={s.fieldLabel}>Confirmar contraseña</Text>
              <TextInput
                style={s.fieldInput}
                value={confirm}
                onChangeText={setConfirm}
                placeholder="Repite tu contraseña"
                placeholderTextColor="#444"
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              style={[s.ctaBtn, register.isPending && s.btnDisabled]}
              onPress={handleRegister}
              disabled={register.isPending}
              activeOpacity={0.85}
            >
              {register.isPending
                ? <ActivityIndicator color="#0D0D0D" />
                : <Text style={s.ctaBtnText}>Crear cuenta</Text>
              }
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.back()} style={s.footerRow}>
              <Text style={s.footerText}>
                ¿Ya tienes cuenta? <Text style={s.footerLink}>Inicia sesión</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#0D0D0D" },
  scroll: { flexGrow: 1, justifyContent: "center", paddingBottom: 40 },
  hero: { paddingHorizontal: 28, paddingTop: 60, paddingBottom: 28 },
  accentBar: { width: 40, height: 4, backgroundColor: "#C8F03C", borderRadius: 100, marginBottom: 24 },
  eyebrow: { fontSize: 11, fontWeight: "700", color: "#C8F03C", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 },
  h1: { fontSize: 40, fontWeight: "800", color: "#F5F5F0", letterSpacing: -1.5, lineHeight: 44, marginBottom: 8 },
  accent: { color: "#C8F03C" },
  tagline: { fontSize: 14, color: "#555", lineHeight: 20 },
  separator: { height: 0.5, backgroundColor: "#1A1A1A", marginHorizontal: 28 },
  form: { paddingHorizontal: 24, paddingTop: 24, gap: 14 },
  fieldGroup: { gap: 6 },
  fieldLabel: { fontSize: 10, fontWeight: "700", color: "#666", letterSpacing: 1, textTransform: "uppercase" },
  fieldInput: { backgroundColor: "#161616", borderWidth: 0.5, borderColor: "#2A2A2A", borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: "#F5F5F0" },
  ctaBtn: { backgroundColor: "#C8F03C", borderRadius: 16, paddingVertical: 16, alignItems: "center" },
  ctaBtnText: { fontSize: 15, fontWeight: "800", color: "#0D0D0D", letterSpacing: -0.2 },
  btnDisabled: { opacity: 0.5 },
  footerRow: { alignItems: "center" },
  footerText: { fontSize: 13, color: "#444" },
  footerLink: { color: "#C8F03C", fontWeight: "700" },
  successWrap: { flex: 1, justifyContent: "center", paddingHorizontal: 32 },
  successEmoji: { fontSize: 52, marginBottom: 20 },
  successTitle: { fontSize: 40, fontWeight: "800", color: "#F5F5F0", letterSpacing: -1.2, lineHeight: 44, marginBottom: 14 },
  successSub: { fontSize: 15, color: "#555", lineHeight: 24, marginBottom: 36 },
  outlineBtn: { borderWidth: 1, borderColor: "#2A2A2A", borderRadius: 16, paddingVertical: 15, alignItems: "center" },
  outlineBtnText: { fontSize: 14, color: "#888", fontWeight: "600" },
});