import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import { useLogin } from "@/features/auth/model/useLogin";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { theme } from "@/core/styles/theme";
import { supabase } from "@/shared/api/supabase";
import { FontAwesome } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import { makeRedirectUri } from "expo-auth-session";
import { GlowOrb } from "@/shared/ui/GlowOrb";

WebBrowser.maybeCompleteAuthSession();

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);
  const login = useLogin();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Campos requeridos", "Completa email y contraseña.");
      return;
    }
    try {
      await login.mutateAsync({ email, password });
    } catch (err: any) {
      Alert.alert("Error", err.message ?? "Credenciales incorrectas.");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setGoogleLoading(true);
      const redirectUrl = makeRedirectUri({ scheme: "authesfot" });
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: redirectUrl,
          queryParams: { prompt: "select_account" },
          skipBrowserRedirect: true,
        },
      });
      if (error || !data?.url) {
        Alert.alert("Error", error?.message ?? "No se pudo obtener la URL de Google.");
        return;
      }
      const result = await WebBrowser.openAuthSessionAsync(data.url, redirectUrl);
      if (result.type === "success") {
        const callbackUrl = result.url.includes("#")
          ? result.url.replace("#", "?")
          : result.url;
        const { params } = QueryParams.getQueryParams(callbackUrl);
        if (params?.access_token && params?.refresh_token) {
          const { error: sessionError } = await supabase.auth.setSession({
            access_token: params.access_token,
            refresh_token: params.refresh_token,
          });
          if (sessionError) Alert.alert("Error", sessionError.message);
        } else {
          Alert.alert("Error", "No se recibieron tokens de Google. Intenta nuevamente.");
        }
      }
    } catch (err: any) {
      Alert.alert("Error", err.message ?? "Error en el inicio de sesión con Google.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#080808" />
      <KeyboardAvoidingView style={s.root} behavior="padding">
        <ScrollView
          contentContainerStyle={s.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ── Luces de fondo ── */}
          <GlowOrb color="rgb(65, 50, 101)" size={280} style={{ top: -100, left: -100 }} />
          <GlowOrb color="rgba(93,101,50,1)" size={200} style={{ top: -60, right: -70 }} />
          <GlowOrb color="rgba(93,101,50,1)" size={660} style={{ top: 220, alignSelf: "center", left: "20%" }} />

          {/* ── Hero ── */}
          <View style={s.hero}>
            <View style={s.logoBox}>
              <View style={s.logoInner} />
            </View>
            <Text style={s.h1}>
              Hola,{"\n"}<Text style={s.h1Accent}>bienvenido.</Text>
            </Text>
            <Text style={s.tagline}>Ingresa para continuar a tu cuenta</Text>
          </View>

          <View style={s.separator} />

          {/* ── Formulario ── */}
          <View style={s.form}>
            <View style={s.fieldGroup}>
              <Text style={s.fieldLabel}>Correo</Text>
              <TextInput
                style={s.fieldInput}
                value={email}
                onChangeText={setEmail}
                placeholder="tu@correo.com"
                placeholderTextColor="#3A3A3A"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={s.fieldGroup}>
              <Text style={s.fieldLabel}>Contraseña</Text>
              <TextInput
                style={[s.fieldInput, s.fieldInputFocus]}
                value={password}
                onChangeText={setPassword}
                placeholder="Tu contraseña"
                placeholderTextColor="#3A3A3A"
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              onPress={() => router.push("/(auth)/forgot-password")}
              style={s.forgotRow}
            >
              <Text style={s.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            {/* Botón con su propio glow */}
            <View style={s.ctaWrap}>
              {/* <GlowOrb color="rgba(200,240,60,1)" size={160} style={s.ctaGlow} /> */}
              <TouchableOpacity
                style={[s.ctaBtn, login.isPending && s.btnDisabled]}
                onPress={handleLogin}
                disabled={login.isPending}
                activeOpacity={0.85}
              >
                {login.isPending
                  ? <ActivityIndicator color="#080808" />
                  : <Text style={s.ctaBtnText}>Iniciar sesión</Text>
                }
              </TouchableOpacity>
            </View>

            <View style={s.divRow}>
              <View style={s.divLine} />
              <Text style={s.divText}>o continúa con</Text>
              <View style={s.divLine} />
            </View>

            <TouchableOpacity
              style={[s.googleBtn, googleLoading && s.btnDisabled]}
              onPress={handleGoogleSignIn}
              disabled={googleLoading}
              activeOpacity={0.8}
            >
              <FontAwesome name="google" size={16} color="#666" />
              <Text style={s.googleBtnText}>
                {googleLoading ? "Conectando..." : "Continuar con Google"}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(auth)/register")}
              style={s.footerRow}
            >
              <Text style={s.footerText}>
                ¿No tienes cuenta?{" "}
                <Text style={s.footerLink}>Regístrate</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const s = StyleSheet.create({
  root:           { flex: 1, backgroundColor: "#080808" },
  scroll:         { flexGrow: 1, justifyContent: "center", paddingBottom: 40, overflow: "hidden" },
  hero:           { paddingHorizontal: 28, paddingTop: 64, paddingBottom: 28 },
  logoBox:        { width: 38, height: 38, borderRadius: 10, backgroundColor: "rgba(200,240,60,0.1)", borderWidth: 0.5, borderColor: "rgba(200,240,60,0.25)", alignItems: "center", justifyContent: "center", marginBottom: 20 },
  logoInner:      { width: 16, height: 16, borderWidth: 2, borderColor: "#C8F03C", borderRadius: 4 },
  h1:             { fontSize: 40, fontWeight: "800", color: "#F5F5F0", letterSpacing: -1.5, lineHeight: 44, marginBottom: 8 },
  h1Accent:       { color: "#C8F03C" },
  tagline:        { fontSize: 14, color: "#555", lineHeight: 20 },
  separator:      { height: 0.5, backgroundColor: "rgba(255,255,255,0.06)", marginHorizontal: 28 },
  form:           { paddingHorizontal: 24, paddingTop: 24, gap: 14 },
  fieldGroup:     { gap: 6 },
  fieldLabel:     { fontSize: 10, fontWeight: "700", color: "#555", letterSpacing: 1, textTransform: "uppercase" },
  fieldInput:     { backgroundColor: "rgba(255,255,255,0.04)", borderWidth: 0.5, borderColor: "rgba(255,255,255,0.1)", borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, fontSize: 15, color: "#F5F5F0" },
  fieldInputFocus:{ borderColor: "rgba(200,240,60,0.45)", backgroundColor: "rgba(200,240,60,0.04)" },
  forgotRow:      { alignSelf: "flex-end" },
  forgotText:     { fontSize: 13, color: "#C8F03C", fontWeight: "600" },
  ctaWrap:        { position: "relative", alignItems: "center" },
  ctaGlow:        { top: -50, alignSelf: "center", opacity: 0.6 },
  ctaBtn:         { width: "100%", backgroundColor: "#C8F03C", borderRadius: 16, paddingVertical: 16, alignItems: "center", zIndex: 1 },
  ctaBtnText:     { fontSize: 15, fontWeight: "800", color: "#080808", letterSpacing: -0.2 },
  btnDisabled:    { opacity: 0.5 },
  divRow:         { flexDirection: "row", alignItems: "center", gap: 10 },
  divLine:        { flex: 1, height: 0.5, backgroundColor: "rgba(255,255,255,0.07)" },
  divText:        { fontSize: 11, color: "#333" },
  googleBtn:      { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 10, backgroundColor: "rgba(255,255,255,0.04)", borderWidth: 0.5, borderColor: "rgba(255,255,255,0.1)", borderRadius: 14, paddingVertical: 14 },
  googleBtnText:  { fontSize: 14, color: "#666", fontWeight: "600" },
  footerRow:      { alignItems: "center" },
  footerText:     { fontSize: 13, color: "#3A3A3A" },
  footerLink:     { color: "#C8F03C", fontWeight: "700" },
});