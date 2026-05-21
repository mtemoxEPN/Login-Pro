import { QueryProvider } from "@/core/providers/QueryProvider";
import { useSession } from "@/features/session/model/useSession";
import { Href, router, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

// 1. Importar herramientas de fuentes y SplashScreen
import { useFonts, Caveat_400Regular, Caveat_700Bold } from "@expo-google-fonts/caveat";
import * as SplashScreen from "expo-splash-screen";

// 2. Evitar que la pantalla de carga desaparezca automáticamente
SplashScreen.preventAutoHideAsync();

function AuthGuard() {
  const { isAuthenticated, isLoading } = useSession();

  useEffect(() => {
    if (isLoading) return;
    if (isAuthenticated) {
      router.replace("/home" as Href);
    } else {
      router.replace("/(auth)/login" as Href);
    }
  }, [isAuthenticated, isLoading]);

  return null;
}

export default function RootLayout() {
  // 3. Cargar la fuente. Le damos el nombre "Caveat" para usarla así en los estilos
  const [fontsLoaded, fontError] = useFonts({
    Caveat: Caveat_400Regular,
    CaveatBold: Caveat_700Bold, // Por si quieres usar la versión en negrita luego
  });

  // 4. Ocultar el Splash Screen en cuanto la fuente cargue (o si falla)
  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // 5. Retornar null mientras carga mantiene el Splash Screen en pantalla
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <QueryProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="home" />
          <Stack.Screen name="index" />
        </Stack>
        <AuthGuard />
      </QueryProvider>
    </TamaguiProvider>
  );
}