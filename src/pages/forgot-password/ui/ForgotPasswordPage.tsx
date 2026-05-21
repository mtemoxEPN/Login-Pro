import { useState } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView, TextInput,
  Alert, TouchableOpacity, StatusBar, ActivityIndicator
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

  if (success) return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0D0D0D" />
      <View style={s.root}>
        <View style={s.successWrap}>
          <View style={s.accentBar} />
          <Text style={s.successEmoji}>📧</Text>
          <Text style={s.successTitle}>
            Email{"\n"}<Text style={s.accent}>enviado.</Text>
          </Text>
          <Text style={s.successSub}>
            Revisa tu bandeja en{" "}
            <Text style={{ color: "#F5F5F0", fontWeight: "700" }}>{email}</Text>
            {"\n"}y sigue el enlace para restablecer tu contraseña.
          </Text>
          <TouchableOpacity
            style={s.outlineBtn}
            onPress={() => router.replace("/(auth)/login")}
          >
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
        <View style={s.inner}>
          <TouchableOpacity onPress={() => router.back()} style={s.backBtn}>
            <Text style={s.backText}>← Volver</Text>
          </TouchableOpacity>

          <View style={s.hero}>
            <View style={s.accentBar} />
            <Text style={s.eyebrow}>Recuperación</Text>
            <Text style={s.h1}>
              ¿Olvidaste{"\n"}<Text style={s.accent}>tu clave?</Text>
            </Text>
            <Text style={s.tagline}>Te enviamos un enlace de recuperación al instante</Text>
          </View>

          <View style={s.separator} />

          <View style={s.form}>
            <View style={s.fieldGroup}>
              <Text style={s.fieldLabel}>Correo electrónico</Text>
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

            <TouchableOpacity
              style={[s.ctaBtn, forgotPassword.isPending && s.btnDisabled]}
              onPress={handleSend}
              disabled={forgotPassword.isPending}
              activeOpacity={0.85}
            >
              {forgotPassword.isPending
                ? <ActivityIndicator color="#0D0D0D" />
                : <Text style={s.ctaBtnText}>Enviar instrucciones</Text>
              }
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const s = StyleSheet.create({
  root:          { flex: 1, backgroundColor: "#0D0D0D" },
  inner:         { flex: 1, justifyContent: "center" },
  backBtn:       { position: "absolute", top: 56, left: 28, zIndex: 10 },
  backText:      { fontSize: 14, color: "#C8F03C", fontWeight: "600" },
  hero:          { paddingHorizontal: 28, paddingTop: 60, paddingBottom: 28 },
  accentBar:     { width: 40, height: 4, backgroundColor: "#C8F03C", borderRadius: 100, marginBottom: 24 },
  eyebrow:       { fontSize: 11, fontWeight: "700", color: "#C8F03C", letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 },
  h1:            { fontSize: 40, fontWeight: "800", color: "#F5F5F0", letterSpacing: -1.5, lineHeight: 44, marginBottom: 8 },
  accent:        { color: "#C8F03C" },
  tagline:       { fontSize: 14, color: "#555", lineHeight: 20 },
  separator:     { height: 0.5, backgroundColor: "#1A1A1A", marginHorizontal: 28 },
  form:          { paddingHorizontal: 24, paddingTop: 24, gap: 14 },
  fieldGroup:    { gap: 6 },
  fieldLabel:    { fontSize: 10, fontWeight: "700", color: "#666", letterSpacing: 1, textTransform: "uppercase" },
  fieldInput:    { backgroundColor: "#161616", borderWidth: 0.5, borderColor: "#2A2A2A", borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: "#F5F5F0" },
  ctaBtn:        { backgroundColor: "#C8F03C", borderRadius: 16, paddingVertical: 16, alignItems: "center" },
  ctaBtnText:    { fontSize: 15, fontWeight: "800", color: "#0D0D0D", letterSpacing: -0.2 },
  btnDisabled:   { opacity: 0.5 },
  successWrap:   { flex: 1, justifyContent: "center", paddingHorizontal: 32 },
  successEmoji:  { fontSize: 52, marginBottom: 20 },
  successTitle:  { fontSize: 40, fontWeight: "800", color: "#F5F5F0", letterSpacing: -1.2, lineHeight: 44, marginBottom: 14 },
  successSub:    { fontSize: 15, color: "#555", lineHeight: 24, marginBottom: 36 },
  outlineBtn:    { borderWidth: 1, borderColor: "#2A2A2A", borderRadius: 16, paddingVertical: 15, alignItems: "center" },
  outlineBtnText:{ fontSize: 14, color: "#888", fontWeight: "600" },
});