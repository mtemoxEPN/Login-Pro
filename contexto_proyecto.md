# Contexto Completo del Proyecto CV-CREATOR-APP


================================================
📄 ARCHIVO: .env
================================================

EXPO_PUBLIC_SUPABASE_URL=https://vauleodjbthbocismnqb.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_hDgFcwVt46uPDegLkC2xSg_L2T5nnv9
EXPO_PUBLIC_WEB_URL=https://auth-esfot-web-ivory.vercel.app

================================================
📄 ARCHIVO: .gitignore
================================================

# Learn more https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files

# dependencies
node_modules/

# Expo
.expo/
dist/
web-build/
expo-env.d.ts

# Native
.kotlin/
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local

# typescript
*.tsbuildinfo

app-example

# generated native folders
/ios
/android
.env


================================================
📄 ARCHIVO: android\.gitignore
================================================

# OSX
#
.DS_Store

# Android/IntelliJ
#
build/
.idea
.gradle
local.properties
*.iml
*.hprof
.cxx/

# Bundle artifacts
*.jsbundle


================================================
📄 ARCHIVO: android\build\generated\autolinking\autolinking.json
================================================

{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro","reactNativePath":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native","dependencies":{"@react-native-async-storage/async-storage":{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\@react-native-async-storage\\async-storage","name":"@react-native-async-storage/async-storage","platforms":{"android":{"sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\@react-native-async-storage\\async-storage\\android","packageImportPath":"import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;","packageInstance":"new AsyncStoragePackage()","buildTypes":[],"libraryName":"rnasyncstorage","componentDescriptors":[],"cmakeListsPath":"C:/Users/MATEMOX/Documents/mtemox/5to Semestre/Desarrollo de Aplicaciones Moviles/Deber 5/Login-Pro/node_modules/@react-native-async-storage/async-storage/android/build/generated/source/codegen/jni/CMakeLists.txt","cxxModuleCMakeListsModuleName":null,"cxxModuleCMakeListsPath":null,"cxxModuleHeaderName":null,"isPureCxxDependency":false}}},"expo":{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\expo","name":"expo","platforms":{"android":{"sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\expo\\android","packageImportPath":"import expo.modules.ExpoModulesPackage;","packageInstance":"new ExpoModulesPackage()","buildTypes":[],"componentDescriptors":[],"cmakeListsPath":"C:/Users/MATEMOX/Documents/mtemox/5to Semestre/Desarrollo de Aplicaciones Moviles/Deber 5/Login-Pro/node_modules/expo/android/build/generated/source/codegen/jni/CMakeLists.txt","cxxModuleCMakeListsModuleName":null,"cxxModuleCMakeListsPath":null,"cxxModuleHeaderName":null,"isPureCxxDependency":false}}},"react-native-gesture-handler":{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-gesture-handler","name":"react-native-gesture-handler","platforms":{"android":{"sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-gesture-handler\\android","packageImportPath":"import com.swmansion.gesturehandler.RNGestureHandlerPackage;","packageInstance":"new RNGestureHandlerPackage()","buildTypes":[],"libraryName":"rngesturehandler_codegen","componentDescriptors":["RNGestureHandlerButtonComponentDescriptor","RNGestureHandlerRootViewComponentDescriptor"],"cmakeListsPath":"C:/Users/MATEMOX/Documents/mtemox/5to Semestre/Desarrollo de Aplicaciones Moviles/Deber 5/Login-Pro/node_modules/react-native-gesture-handler/android/build/generated/source/codegen/jni/CMakeLists.txt","cxxModuleCMakeListsModuleName":null,"cxxModuleCMakeListsPath":null,"cxxModuleHeaderName":null,"isPureCxxDependency":false}}},"react-native-reanimated":{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-reanimated","name":"react-native-reanimated","platforms":{"android":{"sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-reanimated\\android","packageImportPath":"import com.swmansion.reanimated.ReanimatedPackage;","packageInstance":"new ReanimatedPackage()","buildTypes":[],"libraryName":"rnreanimated","componentDescriptors":[],"cmakeListsPath":"C:/Users/MATEMOX/Documents/mtemox/5to Semestre/Desarrollo de Aplicaciones Moviles/Deber 5/Login-Pro/node_modules/react-native-reanimated/android/build/generated/source/codegen/jni/CMakeLists.txt","cxxModuleCMakeListsModuleName":null,"cxxModuleCMakeListsPath":null,"cxxModuleHeaderName":null,"isPureCxxDependency":false}}},"react-native-safe-area-context":{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-safe-area-context","name":"react-native-safe-area-context","platforms":{"android":{"sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-safe-area-context\\android","packageImportPath":"import com.th3rdwave.safeareacontext.SafeAreaContextPackage;","packageInstance":"new SafeAreaContextPackage()","buildTypes":[],"libraryName":"safeareacontext","componentDescriptors":["RNCSafeAreaProviderComponentDescriptor","RNCSafeAreaViewComponentDescriptor"],"cmakeListsPath":"C:/Users/MATEMOX/Documents/mtemox/5to Semestre/Desarrollo de Aplicaciones Moviles/Deber 5/Login-Pro/node_modules/react-native-safe-area-context/android/src/main/jni/CMakeLists.txt","cxxModuleCMakeListsModuleName":null,"cxxModuleCMakeListsPath":null,"cxxModuleHeaderName":null,"isPureCxxDependency":false}}},"react-native-screens":{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-screens","name":"react-native-screens","platforms":{"android":{"sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-screens\\android","packageImportPath":"import com.swmansion.rnscreens.RNScreensPackage;","packageInstance":"new RNScreensPackage()","buildTypes":[],"libraryName":"rnscreens","componentDescriptors":["RNSFullWindowOverlayComponentDescriptor","RNSScreenContainerComponentDescriptor","RNSScreenNavigationContainerComponentDescriptor","RNSScreenStackHeaderConfigComponentDescriptor","RNSScreenStackHeaderSubviewComponentDescriptor","RNSScreenStackComponentDescriptor","RNSSearchBarComponentDescriptor","RNSScreenComponentDescriptor","RNSScreenFooterComponentDescriptor","RNSScreenContentWrapperComponentDescriptor","RNSModalScreenComponentDescriptor","RNSBottomTabsComponentDescriptor"],"cmakeListsPath":"C:/Users/MATEMOX/Documents/mtemox/5to Semestre/Desarrollo de Aplicaciones Moviles/Deber 5/Login-Pro/node_modules/react-native-screens/android/src/main/jni/CMakeLists.txt","cxxModuleCMakeListsModuleName":null,"cxxModuleCMakeListsPath":null,"cxxModuleHeaderName":null,"isPureCxxDependency":false}}},"react-native-worklets":{"root":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-worklets","name":"react-native-worklets","platforms":{"android":{"sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\node_modules\\react-native-worklets\\android","packageImportPath":"import com.swmansion.worklets.WorkletsPackage;","packageInstance":"new WorkletsPackage()","buildTypes":[],"libraryName":"rnworklets","componentDescriptors":[],"cmakeListsPath":"C:/Users/MATEMOX/Documents/mtemox/5to Semestre/Desarrollo de Aplicaciones Moviles/Deber 5/Login-Pro/node_modules/react-native-worklets/android/build/generated/source/codegen/jni/CMakeLists.txt","cxxModuleCMakeListsModuleName":null,"cxxModuleCMakeListsPath":null,"cxxModuleHeaderName":null,"isPureCxxDependency":false}}}},"project":{"android":{"packageName":"com.mtemox.authesfot","sourceDir":"C:\\Users\\MATEMOX\\Documents\\mtemox\\5to Semestre\\Desarrollo de Aplicaciones Moviles\\Deber 5\\Login-Pro\\android"}}}


================================================
📄 ARCHIVO: app\(auth)\forgot-password.tsx
================================================

import { ForgotPasswordPage } from "@/pages/forgot-password/ui/ForgotPasswordPage";

export default function ForgotPasswordScreen() {
  return <ForgotPasswordPage />;
}

================================================
📄 ARCHIVO: app\(auth)\login.tsx
================================================

import { LoginPage } from "@/pages/login/ui/LoginPage";

export default function LoginScreen() {
  return <LoginPage />;
}

================================================
📄 ARCHIVO: app\(auth)\register.tsx
================================================

import { RegisterPage } from "@/pages/register/ui/RegisterPage";

export default function RegisterScreen() {
  return <RegisterPage />;
}

================================================
📄 ARCHIVO: app\(auth)\_layout.tsx
================================================

import { Stack } from "expo-router";
 
// Layout para las rutas del grupo (auth).
// Todas las pantallas de auth comparten este stack sin header.
export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "fade" }} />
  );
}


================================================
📄 ARCHIVO: app\home.tsx
================================================

import { HomePage } from "@/pages/home/ui/HomePage";

export default function HomeScreen() {
  return <HomePage />;
}

================================================
📄 ARCHIVO: app\index.tsx
================================================

import { View, ActivityIndicator, StyleSheet } from "react-native";
 
// Esta pantalla se muestra brevemente mientras AuthGuard
// en _layout.tsx determina si el usuario tiene sesión.
export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1B3A6B" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: { flex:1, justifyContent:"center",
               alignItems:"center", backgroundColor:"#F0F4FF" },
});


================================================
📄 ARCHIVO: app\_layout.tsx
================================================

import { QueryProvider } from "@/core/providers/QueryProvider";
import { useSession } from "@/features/session/model/useSession";
import { Href, router, Stack } from "expo-router";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

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

================================================
📄 ARCHIVO: app.json
================================================

{
  "expo": {
    "name": "auth-esfot",
    "slug": "auth-esfot",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "authesfot",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      },
      "edgeToEdgeEnabled": true,
      "predictiveBackGestureEnabled": false,
      "package": "com.mtemox.authesfot"
    },
    "web": {
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff",
          "dark": {
            "backgroundColor": "#000000"
          }
        }
      ],
      "expo-secure-store",
      "expo-web-browser"
    ],
    "experiments": {
      "typedRoutes": true,
      "reactCompiler": true
    },
    "extra": {
      "router": {},
      "eas": {
        "projectId": "e1799c40-69fb-43ee-ae96-c1bd89fc07a1"
      }
    }
  }
}


================================================
📄 ARCHIVO: apps\web\.gitignore
================================================

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
.env
.vercel


================================================
📄 ARCHIVO: apps\web\eslint.config.js
================================================

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])


================================================
📄 ARCHIVO: apps\web\package.json
================================================

{
  "name": "web",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.105.4",
    "react": "^19.2.6",
    "react-dom": "^19.2.6",
    "react-router-dom": "^7.15.1",
    "vercel": "^54.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.12.3",
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "eslint": "^10.3.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.2",
    "globals": "^17.6.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.59.2",
    "vite": "^8.0.12"
  }
}


================================================
📄 ARCHIVO: apps\web\README.md
================================================

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


================================================
📄 ARCHIVO: apps\web\src\app\App.tsx
================================================

import "./styles/global.css";
import { AppRouter } from "./router";

function App() {
  return <AppRouter />;
}

export default App; 


================================================
📄 ARCHIVO: apps\web\src\app\router.tsx
================================================

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConfirmEmailPage }   from "@/pages/confirm-email/ui/ConfirmEmailPage";
import { ResetPasswordPage }  from "@/pages/reset-password/ui/ResetPasswordPage";
 
export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/confirm-email"  element={<ConfirmEmailPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      {/* Ruta por defecto: redirige al confirm-email */}
      <Route path="*" element={<Navigate to="/confirm-email" replace />} />
    </Routes>
  </BrowserRouter>
);


================================================
📄 ARCHIVO: apps\web\src\features\confirm-email\model\useConfirmEmail.ts
================================================

import { useState, useEffect } from "react";
import { supabase } from "@/shared/api/supabase";
 
type Status = "loading" | "success" | "error";
 
export const useConfirmEmail = () => {
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError]   = useState<string | null>(null);
 
  useEffect(() => {
    // Supabase procesa el token del hash de la URL automáticamente.
    // Escuchamos el evento de cambio de estado para saber si fue exitoso.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event) => {
        if (event === "SIGNED_IN" || event === "USER_UPDATED") {
          setStatus("success");
          // Cerrar la sesión para que el usuario no quede logueado en el web
          await supabase.auth.signOut();
        }
      }
    );
 
    // Timeout: si en 8 segundos no llegó el evento, algo salió mal
    const timeout = setTimeout(() => {
      setStatus(prev => prev === "loading" ? "error" : prev);
      setError("El link de confirmación es inválido o ha expirado.");
    }, 8000);
 
    return () => {
      subscription.unsubscribe();
      clearTimeout(timeout);
    };
  }, []);
 
  return { status, error };
};


================================================
📄 ARCHIVO: apps\web\src\features\reset-password\model\useResetPassword.ts
================================================

import { supabase } from "@/shared/api/supabase";
import { useEffect, useState } from "react";

type Status = "loading" | "ready" | "updating" | "success" | "error";

const hasRecoveryTokenInUrl = () => {
  if (typeof window === "undefined") return false;

  const hash = window.location.hash.startsWith("#")
    ? window.location.hash.slice(1)
    : window.location.hash;

  const hashParams = new URLSearchParams(hash);
  const queryParams = new URLSearchParams(window.location.search);

  const type = hashParams.get("type") ?? queryParams.get("type");
  const accessToken =
    hashParams.get("access_token") ?? queryParams.get("access_token");
  const tokenHash =
    hashParams.get("token_hash") ?? queryParams.get("token_hash");

  return type === "recovery" && Boolean(accessToken || tokenHash);
};

export const useResetPassword = () => {
  const [status, setStatus] = useState<Status>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const markReady = () => {
      if (!isActive) return;
      setError(null);
      setStatus("ready");
    };

    const checkRecoveryState = async () => {
      if (hasRecoveryTokenInUrl()) {
        markReady();
        return;
      }

      await supabase.auth.getSession();
      markReady();
    };

    void checkRecoveryState();

    // Supabase emite PASSWORD_RECOVERY cuando detecta el token en la URL
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") {
        // El token puede haberse consumido antes de leer el hash.
        // Si hay sesión válida de recuperación, habilitamos el formulario.
        markReady();
      }
    });

    return () => {
      isActive = false;
      subscription.unsubscribe();
    };
  }, []);

  const updatePassword = async (newPassword: string) => {
    setStatus("updating");
    setError(null);

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      const isExpiredOrInvalid = /expired|invalid|session|token|jwt/i.test(
        error.message,
      );

      setError(
        isExpiredOrInvalid
          ? "El link ha expirado o es inválido. Solicita uno nuevo."
          : error.message,
      );
      setStatus("ready");
      return;
    }

    // Cerrar sesión web después de actualizar (el usuario debe entrar en la app)
    await supabase.auth.signOut();
    setStatus("success");
  };

  return { status, error, updatePassword };
};


================================================
📄 ARCHIVO: apps\web\src\features\reset-password\ui\ResetPasswordForm.tsx
================================================

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { useState } from "react";
import { useResetPassword } from "../model/useResetPassword";

export const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [valError, setValError] = useState("");
  const [didSubmit, setDidSubmit] = useState(false);
  const { status, error, updatePassword } = useResetPassword();

  const handleSubmit = async () => {
    setDidSubmit(true);
    setValError("");
    if (password.length < 8) {
      setValError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setValError("Las contraseñas no coinciden.");
      return;
    }
    await updatePassword(password);
  };

  if (status === "loading") {
    return (
      <p style={{ textAlign: "center", color: "#64748B" }}>
        Verificando link...
      </p>
    );
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "64px", marginBottom: "16px" }}>✅</div>
        <h3 style={{ color: "#059669", marginBottom: "8px" }}>
          ¡Contraseña actualizada!
        </h3>
        <p style={{ color: "#64748B" }}>
          Regresa a la app móvil e inicia sesión con tu nueva contraseña.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input
        label="Nueva contraseña"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Mínimo 8 caracteres"
      />
      <Input
        label="Confirmar contraseña"
        type="password"
        value={confirm}
        onChange={setConfirm}
        placeholder="Repite tu contraseña"
      />
      {(valError || (didSubmit && error)) && (
        <p style={{ color: "#DC2626", fontSize: "14px", margin: 0 }}>
          {valError || (didSubmit ? error : null)}
        </p>
      )}
      <Button onClick={handleSubmit} isLoading={status === "updating"}>
        Actualizar contraseña
      </Button>
    </div>
  );
}; 


================================================
📄 ARCHIVO: apps\web\src\main.tsx
================================================

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


================================================
📄 ARCHIVO: apps\web\src\pages\confirm-email\ui\ConfirmEmailPage.tsx
================================================

import { useConfirmEmail } from "@/features/confirm-email/model/useConfirmEmail";
import type { CSSProperties } from "react";
 
export const ConfirmEmailPage = () => {
  const { status, error } = useConfirmEmail();
 
  const content = () => {
    if (status === "loading") return (
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:"48px", marginBottom:"16px" }}>⏳</div>
        <h2 style={{ color:"#1B3A6B" }}>Confirmando tu cuenta...</h2>
        <p style={{ color:"#64748B" }}>Un momento por favor.</p>
      </div>
    );
    if (status === "error") return (
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:"48px", marginBottom:"16px" }}>❌</div>
        <h2 style={{ color:"#DC2626" }}>Link inválido</h2>
        <p style={{ color:"#64748B" }}>{error}</p>
      </div>
    );
    return (
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:"72px", marginBottom:"20px" }}>🎉</div>
        <h2 style={{ color:"#059669", marginBottom:"12px" }}>
          ¡Cuenta confirmada!
        </h2>
        <p style={{ color:"#334155", marginBottom:"8px" }}>
          Tu cuenta ha sido verificada exitosamente.
        </p>
        <p style={{ color:"#64748B", fontWeight:"600" }}>
          Regresa a la aplicación móvil e inicia sesión.
        </p>
      </div>
    );
  };
 
  return (
    <main style={layout}>
      <div style={card}>
        <div style={header}>
          <span style={{ fontSize:"42px" }}>🔐</span>
          <h1 style={{ color:"#fff", margin:"8px 0 4px", fontSize:"22px" }}>
            ESFOT Auth
          </h1>
          <p style={{ color:"rgba(255,255,255,0.7)", margin:0, fontSize:"14px" }}>
            Confirmación de cuenta
          </p>
        </div>
        <div style={{ padding:"36px 32px" }}>{content()}</div>
      </div>
    </main>
  );
};
 
const layout: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #F0F4FF 0%, #E0EAFF 100%)",
  display: "flex", alignItems: "center", justifyContent: "center",
  padding: "24px",
};
const card: CSSProperties = {
  background: "#fff", borderRadius: "20px",
  boxShadow: "0 20px 60px rgba(27,58,107,0.15)",
  width: "100%", maxWidth: "420px", overflow: "hidden",
};
const header: CSSProperties = {
  background: "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
  padding: "28px 32px", textAlign: "center",
};


================================================
📄 ARCHIVO: apps\web\src\pages\reset-password\ui\ResetPasswordPage.tsx
================================================

import { ResetPasswordForm } from "@/features/reset-password/ui/ResetPasswordForm";
import type { CSSProperties } from "react";
 
export const ResetPasswordPage = () => (
  <main style={layout}>
    <div style={card}>
      <div style={header}>
        <span style={{ fontSize:"42px" }}>🔑</span>
        <h1 style={{ color:"#fff", margin:"8px 0 4px", fontSize:"22px" }}>
          Nueva contraseña
        </h1>
        <p style={{ color:"rgba(255,255,255,0.7)", margin:0, fontSize:"14px" }}>
          ESFOT Auth — Recuperación de acceso
        </p>
      </div>
      <div style={{ padding:"36px 32px" }}>
        <ResetPasswordForm />
      </div>
    </div>
  </main>
);
 
const layout: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #F0F4FF 0%, #E0EAFF 100%)",
  display: "flex", alignItems: "center", justifyContent: "center",
  padding: "24px",
};
const card: CSSProperties = {
  background: "#fff", borderRadius: "20px",
  boxShadow: "0 20px 60px rgba(27,58,107,0.15)",
  width: "100%", maxWidth: "420px", overflow: "hidden",
};
const header: CSSProperties = {
  background: "linear-gradient(135deg, #1B3A6B 0%, #2563EB 100%)",
  padding: "28px 32px", textAlign: "center",
};


================================================
📄 ARCHIVO: apps\web\src\shared\api\supabase.ts
================================================

import { createClient } from "@supabase/supabase-js";
 
const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
 
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Faltan variables de entorno. Revisa tu archivo .env"
  );
}
 
export const supabase = createClient(supabaseUrl, supabaseAnonKey);


================================================
📄 ARCHIVO: apps\web\src\shared\ui\Button.tsx
================================================

import { ReactNode, CSSProperties } from "react";
 
interface ButtonProps {
  children:  ReactNode;
  onClick?:  () => void;
  type?:     "button" | "submit" | "reset";
  variant?:  "primary" | "ghost";
  disabled?: boolean;
  isLoading?: boolean;
}
 
export const Button = ({
  children, onClick, type = "button",
  variant = "primary", disabled, isLoading,
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;
 
  const base: CSSProperties = {
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: "8px", padding: "13px 24px", borderRadius: "10px",
    fontSize: "15px", fontWeight: "600", cursor: isDisabled ? "not-allowed" : "pointer",
    transition: "all 0.2s ease", border: "none", width: "100%",
    opacity: isDisabled ? 0.6 : 1,
  };
 
  const styles: Record<string, CSSProperties> = {
    primary: { background: "#1B3A6B", color: "#fff" },
    ghost:   { background: "transparent", color: "#1B3A6B",
               border: "2px solid #1B3A6B" },
  };
 
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style={{ ...base, ...styles[variant] }}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
};


================================================
📄 ARCHIVO: apps\web\src\shared\ui\Input.tsx
================================================

interface InputProps {
  label:       string;
  type?:       string;
  value:       string;
  onChange:    (v: string) => void;
  placeholder?: string;
  error?:      string;
}
 
export const Input = ({
  label, type = "text", value, onChange, placeholder, error
}: InputProps) => (
  <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
    <label style={{ fontSize:"14px", fontWeight:"500", color:"#334155" }}>
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: "12px 16px",
        border: `1.5px solid ${error ? "#DC2626" : "#CBD5E1"}`,
        borderRadius: "10px",
        fontSize: "15px",
        color: "#0F172A",
        background: "#F8FAFC",
        outline: "none",
        fontFamily: "inherit",
      }}
    />
    {error && (
      <span style={{ fontSize:"12px", color:"#DC2626" }}>{error}</span>
    )}
  </div>
);


================================================
📄 ARCHIVO: apps\web\tsconfig.app.json
================================================

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}

================================================
📄 ARCHIVO: apps\web\tsconfig.json
================================================

{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src", "vite-env.d.ts"]
}

================================================
📄 ARCHIVO: apps\web\tsconfig.node.json
================================================

{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023"],
    "module": "esnext",
    "types": ["node"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}


================================================
📄 ARCHIVO: apps\web\vercel.json
================================================

{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}


================================================
📄 ARCHIVO: apps\web\vite-env.d.ts
================================================

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

================================================
📄 ARCHIVO: apps\web\vite.config.ts
================================================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});


================================================
📄 ARCHIVO: babel.config.js
================================================

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          config: "./tamagui.config.ts",
          components: [
            "tamagui",
            "@tamagui/core",
            "@tamagui/button",
            "@tamagui/card",
            "@tamagui/dialog",
            "@tamagui/sheet",
            "@tamagui/stacks",
            "@tamagui/text",
            "@tamagui/input",
          ],
        },
      ],
      ["module-resolver", { root: ["./src"], alias: { "@": "./src" } }],
      ["react-native-reanimated/plugin"],
    ],
  };
};

================================================
📄 ARCHIVO: eas.json
================================================

{
  "cli": {
    "version": ">= 18.11.0",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "env": {
        "EXPO_PUBLIC_SUPABASE_URL": "https://vauleodjbthbocismnqb.supabase.co",
        "EXPO_PUBLIC_SUPABASE_ANON_KEY": "sb_publishable_hDgFcwVt46uPDegLkC2xSg_L2T5nnv9",
        "EXPO_PUBLIC_WEB_URL": "https://auth-esfot-web-ivory.vercel.app"
      }
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}


================================================
📄 ARCHIVO: eslint.config.js
================================================

// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);


================================================
📄 ARCHIVO: expo-env.d.ts
================================================

/// <reference types="expo/types" />

// NOTE: This file should not be edited and should be in your git ignore

================================================
📄 ARCHIVO: package.json
================================================

{
  "name": "auth-esfot",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "web": "expo start --web",
    "lint": "expo lint"
  },
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-native-async-storage/async-storage": "2.2.0",
    "@react-navigation/bottom-tabs": "^7.4.0",
    "@react-navigation/elements": "^2.6.3",
    "@react-navigation/native": "^7.1.8",
    "@supabase/supabase-js": "^2.105.4",
    "@tamagui/animations-react-native": "^2.0.0-rc.42",
    "@tamagui/babel-plugin": "^2.0.0-rc.42",
    "@tamagui/config": "^2.0.0-rc.42",
    "@tamagui/core": "^2.0.0-rc.42",
    "@tamagui/portal": "^2.0.0-rc.42",
    "@tanstack/react-query": "^5.100.10",
    "expo": "~54.0.33",
    "expo-auth-session": "~7.0.11",
    "expo-constants": "~18.0.13",
    "expo-crypto": "~15.0.9",
    "expo-dev-client": "~6.0.21",
    "expo-font": "~14.0.11",
    "expo-haptics": "~15.0.8",
    "expo-image": "~3.0.11",
    "expo-linking": "~8.0.11",
    "expo-router": "~6.0.23",
    "expo-secure-store": "~15.0.8",
    "expo-splash-screen": "~31.0.13",
    "expo-status-bar": "~3.0.9",
    "expo-symbols": "~1.0.8",
    "expo-system-ui": "~6.0.9",
    "expo-web-browser": "~15.0.11",
    "lottie-react-native": "~7.3.1",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-reanimated": "~4.1.1",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-web": "~0.21.0",
    "react-native-worklets": "0.5.1",
    "tamagui": "^2.0.0-rc.42"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "babel-plugin-module-resolver": "^5.0.3",
    "eslint": "^9.25.0",
    "eslint-config-expo": "~10.0.0",
    "typescript": "~5.9.2"
  },
  "overrides": {
    "@tamagui/portal": "^2.0.0-rc.42",
    "@tamagui/sheet": {
      "@tamagui/portal": "^2.0.0-rc.42"
    }
  },
  "private": true
}


================================================
📄 ARCHIVO: README.md
================================================

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


================================================
📄 ARCHIVO: src\core\providers\QueryProvider.tsx
================================================

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry:               1,           // Reintentar 1 vez si falla
      staleTime:           5 * 60*1000, // Datos frescos por 5 minutos
      refetchOnWindowFocus: true,       // Refetch al volver a la app
    },
    mutations: {
      retry: 0, // No reintentar mutaciones (login, register, etc.)
    },
  },
});
 
interface Props { children: ReactNode; }
 
export const QueryProvider = ({ children }: Props) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);



================================================
📄 ARCHIVO: src\core\styles\theme.ts
================================================

// Token de diseño centralizado — tema claro moderno
export const theme = {
  colors: {
    primary:     "#2563EB",
    primaryDark: "#1D4ED8",
    primaryLight:"#EFF6FF",
    accent:      "#06B6D4",
    success:     "#10B981",
    danger:      "#EF4444",
    warning:     "#F59E0B",
    bg:          "#FFFFFF",
    bgSoft:      "#F8FAFC",
    bgMuted:     "#F1F5F9",
    card:        "#FFFFFF",
    text:        "#0F172A",
    textMid:     "#334155",
    textMuted:   "#64748B",
    border:      "#E2E8F0",
    borderFocus: "#2563EB",
    inputBg:     "#F8FAFC",
  },
  radius: {
    sm: 8, md: 12, lg: 16, xl: 20, full: 9999,
  },
  spacing: {
    xs: 4, sm: 8, md: 16, lg: 24, xl: 32,
  },
  shadow: {
    card: {
      shadowColor: "#64748B",
      shadowOpacity: 0.08,
      shadowRadius: 24,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },
    button: {
      shadowColor: "#2563EB",
      shadowOpacity: 0.25,
      shadowRadius: 12,
      shadowOffset: { width: 0, height: 4 },
      elevation: 4,
    },
    subtle: {
      shadowColor: "#94A3B8",
      shadowOpacity: 0.06,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
      elevation: 2,
    },
  },
};

================================================
📄 ARCHIVO: src\entities\user\model\types.ts
================================================

import type { User } from "@supabase/supabase-js";
 
// Re-exportamos el tipo User de Supabase para que el resto de la app
// no dependa directamente de @supabase/supabase-js en todas partes.
// Si algún día cambiamos de proveedor, solo cambiamos este archivo.
export type { User };
 
// Tipo de perfil extendido (cuando tengas tabla profiles en Supabase)
export interface UserProfile {
  id:         string;
  email:      string;
  fullName?:  string;
  avatarUrl?: string;
  createdAt:  string;
}


================================================
📄 ARCHIVO: src\features\auth\model\useForgotPassword.ts
================================================

import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/shared/api/supabase";
 
export const useForgotPassword = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim().toLowerCase(),
        {
          // URL de la página de reset en Vercel.
          // Supabase construye el email con este redirectTo + el token.
          redirectTo:
            `${process.env.EXPO_PUBLIC_WEB_URL}/reset-password`,
        }
      );
      if (error) throw error;
    },
  });
};


================================================
📄 ARCHIVO: src\features\auth\model\useLogin.ts
================================================

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/shared/api/supabase";
import { SESSION_QUERY_KEY } from "@/features/session/model/useSession";
 
interface LoginCredentials {
  email:    string;
  password: string;
}
 
export const useLogin = () => {
  const queryClient = useQueryClient();
 
  return useMutation({
    mutationFn: async ({ email, password }: LoginCredentials) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim().toLowerCase(),
        password,
      });
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      // Actualización optimista: ponemos la sesión en caché inmediatamente.
      // El listener de onAuthStateChange también la actualizará,
      // pero esta línea garantiza que sea instantáneo.
      queryClient.setQueryData(SESSION_QUERY_KEY, data.session);
    },
  });
};


================================================
📄 ARCHIVO: src\features\auth\model\useRegister.ts
================================================

import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/shared/api/supabase";
 
interface RegisterCredentials {
  email:    string;
  password: string;
}
 
export const useRegister = () => {
  return useMutation({
    mutationFn: async ({ email, password }: RegisterCredentials) => {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: {
          // URL de la página de confirmación en Vercel.
          // Supabase incrustará esta URL en el email de confirmación.
          emailRedirectTo:
            `${process.env.EXPO_PUBLIC_WEB_URL}/confirm-email`,
        },
      });
      if (error) throw error;
      return data;
    },
  });
};


================================================
📄 ARCHIVO: src\features\session\model\useSession.ts
================================================

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { supabase } from "@/shared/api/supabase";
import type { Session } from "@supabase/supabase-js";
 
// Clave canónica de la sesión en TanStack Query.
// Al usar la misma clave en cualquier componente de la app,
// TanStack garantiza que todos lean del mismo caché.
export const SESSION_QUERY_KEY = ["auth", "session"] as const;
 
export const useSession = () => {
  const queryClient = useQueryClient();
 
  // Query que obtiene la sesión actual.
  // TanStack Query la cachea y la comparte con todos los suscriptores.
  const { data: session, isLoading } = useQuery<Session | null>({
    queryKey: SESSION_QUERY_KEY,
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
    // La sesión se considera "fresca" por 2 minutos.
    // Después, TanStack la re-fetcha en background automáticamente.
    staleTime: 2 * 60 * 1000,
  });
 
  // Listener de Supabase: cuando el estado de auth cambia
  // (login, logout, token refresh), actualizamos la caché de TanStack.
  // Esto garantiza que la UI se actualice INMEDIATAMENTE sin esperar
  // al siguiente ciclo de refetch.
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        queryClient.setQueryData(SESSION_QUERY_KEY, newSession);
      }
    );
    return () => subscription.unsubscribe();
  }, [queryClient]);
 
  const signOut = async () => {
    await supabase.auth.signOut();
    // Limpiar toda la caché de TanStack al cerrar sesión.
    // Esto evita que datos del usuario anterior persistan.
    queryClient.clear();
  };
 
  return {
    session,
    isLoading,
    isAuthenticated: !!session,
    user: session?.user ?? null,
    signOut,
  };
};


================================================
📄 ARCHIVO: src\features\tasks\model\taskService.ts
================================================

import { supabase } from "@/shared/api/supabase";
import { Task, Priority } from "./types";

export const fetchTasksForUser = async (userId: string): Promise<Task[]> => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
};

export const createTask = async (payload: {
  title: string;
  description: string;
  priority: Priority;
  user_id: string;
}): Promise<Task> => {
  const { data, error } = await supabase
    .from("tasks")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateTask = async (payload: {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  completed: boolean;
}): Promise<Task> => {
  const { data, error } = await supabase
    .from("tasks")
    .update({
      title: payload.title,
      description: payload.description,
      priority: payload.priority,
      completed: payload.completed,
    })
    .eq("id", payload.id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const toggleTaskCompleted = async (
  id: string,
  completed: boolean
): Promise<void> => {
  const { error } = await supabase
    .from("tasks")
    .update({ completed })
    .eq("id", id);

  if (error) throw error;
};

export const deleteTask = async (id: string): Promise<void> => {
  const { error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) throw error;
};

================================================
📄 ARCHIVO: src\features\tasks\model\types.ts
================================================

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

================================================
📄 ARCHIVO: src\features\tasks\model\useTasks.ts
================================================

import { useSession } from "@/features/session/model/useSession";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import {
  createTask,
  deleteTask,
  fetchTasksForUser,
  toggleTaskCompleted,
  updateTask,
} from "./taskService";
import { Priority, Task } from "./types";

export const TASKS_QUERY_KEY = ["tasks"] as const;

export const useTasks = () => {
  const { user } = useSession();
  const queryClient = useQueryClient();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("media");
  const [showSuccess, setShowSuccess] = useState(false);
  const successRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tasksQuery = useQuery<Task[]>({
    queryKey: [...TASKS_QUERY_KEY, user?.id],
    queryFn: async () => {
      if (!user?.id) return [];
      return fetchTasksForUser(user.id);
    },
    enabled: !!user?.id,
  });

  const clearSuccess = useCallback(() => {
    if (successRef.current) {
      clearTimeout(successRef.current);
      successRef.current = null;
    }
  }, []);

  useEffect(() => () => clearSuccess(), [clearSuccess]);

  const triggerSuccess = useCallback(
    (afterMs = 2000) => {
      setShowSuccess(true);
      clearSuccess();
      successRef.current = setTimeout(() => {
        setShowSuccess(false);
        closeForm();
      }, afterMs);
    },
    [clearSuccess]
  );

  const createMutation = useMutation({
    mutationFn: async () => {
      if (!user?.id) throw new Error("No autenticado");
      return createTask({
        title: title.trim(),
        description: description.trim(),
        priority,
        user_id: user.id,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      triggerSuccess();
    },
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo crear la tarea."),
  });

  const updateMutation = useMutation({
    mutationFn: async () => {
      if (!editingTask) throw new Error("Sin tarea");
      return updateTask({
        id: editingTask.id,
        title: title.trim(),
        description: description.trim(),
        priority,
        completed: editingTask.completed,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      triggerSuccess();
    },
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo actualizar la tarea."),
  });

  const toggleMutation = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      toggleTaskCompleted(id, completed),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY }),
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo actualizar."),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: TASKS_QUERY_KEY });
      setTaskToDelete(null);
    },
    onError: (e: any) =>
      Alert.alert("Error", e?.message ?? "No se pudo eliminar la tarea."),
  });

  const openCreateForm = useCallback(() => {
    clearSuccess();
    setIsEditing(false);
    setEditingTask(null);
    setTitle("");
    setDescription("");
    setPriority("media");
    setShowSuccess(false);
    setIsFormOpen(true);
  }, [clearSuccess]);

  const openEditForm = useCallback((task: Task) => {
    setIsEditing(true);
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description ?? "");
    setPriority(task.priority);
    setIsFormOpen(true);
  }, []);

  const closeForm = useCallback(() => {
    clearSuccess();
    setIsFormOpen(false);
    setTitle("");
    setDescription("");
    setPriority("media");
    setIsEditing(false);
    setEditingTask(null);
    setShowSuccess(false);
  }, [clearSuccess]);

  const handleSubmit = useCallback(() => {
    if (!title.trim()) {
      Alert.alert("Validación", "El título es obligatorio.");
      return;
    }
    if (isEditing) {
      updateMutation.mutate();
    } else {
      createMutation.mutate();
    }
  }, [title, isEditing, createMutation, updateMutation]);

  const handleToggle = useCallback(
    (task: Task) => {
      toggleMutation.mutate({ id: task.id, completed: !task.completed });
    },
    [toggleMutation]
  );

  const confirmDelete = useCallback(() => {
    if (!taskToDelete) return;
    deleteMutation.mutate(taskToDelete.id);
  }, [taskToDelete, deleteMutation]);

  return {
    tasks: tasksQuery.data ?? [],
    isLoading: tasksQuery.isLoading,
    isFormOpen,
    isEditing,
    title,
    description,
    priority,
    showSuccess,
    isSaving:
      createMutation.status === "pending" ||
      updateMutation.status === "pending",
    isDeleting: deleteMutation.status === "pending",
    taskToDelete,
    openCreateForm,
    openEditForm,
    closeForm,
    setTitle,
    setDescription,
    setPriority,
    handleSubmit,
    handleToggle,
    openDeleteDialog: setTaskToDelete,
    closeDeleteDialog: () => setTaskToDelete(null),
    confirmDelete,
  };
};

================================================
📄 ARCHIVO: src\features\tasks\ui\TaskDashboard.tsx
================================================

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

const PRIORITY_COLORS: Record<Priority, string> = {
  alta:  "#EF4444",
  media: "#F59E0B",
  baja:  "#10B981",
};

const PRIORITY_BG: Record<Priority, string> = {
  alta:  "#FEF2F2",
  media: "#FFFBEB",
  baja:  "#F0FDF4",
};

const PRIORITY_LABELS: Record<Priority, string> = {
  alta:  "Alta",
  media: "Media",
  baja:  "Baja",
};

const PRIORITY_EMOJI: Record<Priority, string> = {
  alta:  "🔴",
  media: "🟡",
  baja:  "🟢",
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
      {/* Título + badge prioridad */}
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

      {/* Descripción */}
      {task.description ? (
        <Text color="#64748B" fontSize={13} numberOfLines={2} lineHeight={20}>
          {task.description}
        </Text>
      ) : null}

      {/* Acciones */}
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
  const done    = tasks.filter((t) => t.completed).length;

  return (
    <YStack flex={1} padding="$4" gap="$4" backgroundColor="#FFFFFF">

      {/* Header */}
      <XStack justifyContent="space-between" alignItems="center">
        <YStack gap="$1">
          <Text fontSize={22} fontWeight="800" color="#0F172A" letterSpacing={-0.5}>
            Mis Tareas
          </Text>
          <XStack gap="$2" alignItems="center">
            <XStack
              backgroundColor="#FFF7ED"
              paddingHorizontal="$2"
              paddingVertical="$1"
              borderRadius="$10"
            >
              <Text color="#F59E0B" fontSize={12} fontWeight="700">
                {pending} pendientes
              </Text>
            </XStack>
            <XStack
              backgroundColor="#F0FDF4"
              paddingHorizontal="$2"
              paddingVertical="$1"
              borderRadius="$10"
            >
              <Text color="#10B981" fontSize={12} fontWeight="700">
                {done} listas
              </Text>
            </XStack>
          </XStack>
        </YStack>

        <Button
          onPress={openCreateForm}
          size="$3"
          backgroundColor="#2563EB"
          borderRadius="$10"
          paddingHorizontal="$4"
          pressStyle={{ opacity: 0.8 }}
        >
          <Text color="#fff" fontWeight="700" fontSize={14}>+ Nueva</Text>
        </Button>
      </XStack>

      {/* Lista */}
      <ScrollView
        flex={1}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingBottom: 32 }}
      >
        {isLoading ? (
          <YStack alignItems="center" padding="$8" gap="$3">
            <Spinner size="large" color="#2563EB" />
            <Text color="#94A3B8" fontSize={14}>Cargando tareas...</Text>
          </YStack>
        ) : tasks.length === 0 ? (
          <YStack alignItems="center" padding="$8" gap="$3">
            <LottieView
              source={require("../../../../assets/animations/tasks.json")}
              autoPlay
              loop
              style={{ width: 180, height: 180 }}
            />
            <Text color="#0F172A" fontSize={17} fontWeight="700" textAlign="center">
              Sin tareas aún
            </Text>
            <Text color="#94A3B8" fontSize={14} textAlign="center" lineHeight={22}>
              Crea tu primera tarea{"\n"}tocando el botón + Nueva
            </Text>
          </YStack>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={openEditForm}
              onDelete={openDeleteDialog}
              onToggle={handleToggle}
            />
          ))
        )}
      </ScrollView>

      {/* Sheet formulario */}
      <Sheet
        open={isFormOpen}
        onOpenChange={(o) => { if (!o) closeForm(); }}
        modal
        dismissOnSnapToBottom
      >
        <Sheet.Overlay backgroundColor="rgba(0,0,0,0.25)" />
        <Sheet.Frame
          borderTopLeftRadius="$6"
          borderTopRightRadius="$6"
          padding="$5"
          backgroundColor="#FFFFFF"
        >
          <Sheet.Handle marginBottom="$4" backgroundColor="#E2E8F0" />
          <YStack gap="$4">
            {isSaving || showSuccess ? (
              <YStack alignItems="center" justifyContent="center" minHeight={260} gap="$3">
                <LottieView
                  source={
                    showSuccess
                      ? require("../../../../assets/animations/success.json")
                      : require("../../../../assets/animations/loading.json")
                  }
                  autoPlay
                  loop={!showSuccess}
                  style={{ width: 140, height: 140 }}
                />
                <Text fontSize={17} fontWeight="700" color="#0F172A">
                  {showSuccess
                    ? isEditing ? "¡Tarea actualizada!" : "¡Tarea creada!"
                    : isEditing ? "Actualizando..." : "Creando tarea..."}
                </Text>
                {showSuccess && (
                  <Text color="#94A3B8" fontSize={13}>Cerrando en breve...</Text>
                )}
              </YStack>
            ) : (
              <>
                <Text fontSize={19} fontWeight="800" color="#0F172A" letterSpacing={-0.5}>
                  {isEditing ? "Editar tarea" : "Nueva tarea"}
                </Text>

                <YStack gap="$2">
                  <Text color="#334155" fontSize={13} fontWeight="600">Título *</Text>
                  <Input
                    value={title}
                    onChangeText={setTitle}
                    placeholder="¿Qué necesitas hacer?"
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
                  <Text color="#334155" fontSize={13} fontWeight="600">Descripción</Text>
                  <TextArea
                    value={description}
                    onChangeText={setDescription}
                    placeholder="Detalles opcionales..."
                    backgroundColor="#F8FAFC"
                    color="#0F172A"
                    placeholderTextColor="#94A3B8"
                    borderColor="#E2E8F0"
                    borderWidth={1.5}
                    borderRadius="$3"
                    padding="$3"
                    minHeight={90}
                    focusStyle={{ borderColor: "#2563EB" }}
                  />
                </YStack>

                <YStack gap="$2">
                  <Text color="#334155" fontSize={13} fontWeight="600">Prioridad</Text>
                  <PrioritySelector value={priority} onChange={setPriority} />
                </YStack>

                <XStack gap="$3" marginTop="$2">
                  <Button
                    flex={1}
                    onPress={closeForm}
                    backgroundColor="#F8FAFC"
                    borderWidth={1}
                    borderColor="#E2E8F0"
                    borderRadius="$4"
                    size="$4"
                    pressStyle={{ opacity: 0.7 }}
                  >
                    <Text color="#64748B" fontWeight="600">Cancelar</Text>
                  </Button>
                  <Button
                    flex={1}
                    onPress={handleSubmit}
                    disabled={isSaving}
                    backgroundColor="#2563EB"
                    borderRadius="$4"
                    size="$4"
                    pressStyle={{ opacity: 0.8 }}
                  >
                    <Text color="#fff" fontWeight="700">
                      {isEditing ? "Actualizar" : "Crear tarea"}
                    </Text>
                  </Button>
                </XStack>
              </>
            )}
          </YStack>
        </Sheet.Frame>
      </Sheet>

      {/* Dialog eliminar */}
      <AlertDialog
        open={Boolean(taskToDelete)}
        onOpenChange={(o) => { if (!o) closeDeleteDialog(); }}
      >
        <AlertDialog.Portal>
          <AlertDialog.Overlay opacity={0.3} backgroundColor="black" />
          <AlertDialog.Content
            padding="$5"
            borderRadius="$6"
            backgroundColor="#FFFFFF"
            borderWidth={1}
            borderColor="#E2E8F0"
            width="90%"
            maxWidth={400}
            shadowColor="#64748B"
            shadowOpacity={0.12}
            shadowRadius={24}
            shadowOffset={{ width: 0, height: 8 }}
            elevation={8}
          >
            <YStack gap="$4">
              <YStack gap="$1">
                <AlertDialog.Title color="#0F172A" fontSize={18} fontWeight="800">
                  Eliminar tarea
                </AlertDialog.Title>
                <AlertDialog.Description color="#64748B" fontSize={14} lineHeight={22}>
                  <Text color="#64748B" fontSize={14}>
                    {`¿Eliminar "${taskToDelete?.title}"? Esta acción no se puede deshacer.`}
                  </Text>
                </AlertDialog.Description>
              </YStack>

              <XStack justifyContent="flex-end" gap="$3">
                <AlertDialog.Cancel asChild>
                  <Button
                    size="$4"
                    backgroundColor="#F8FAFC"
                    borderWidth={1}
                    borderColor="#E2E8F0"
                    borderRadius="$4"
                    onPress={closeDeleteDialog}
                    pressStyle={{ opacity: 0.7 }}
                  >
                    <Text color="#64748B" fontWeight="600">Cancelar</Text>
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action asChild>
                  <Button
                    size="$4"
                    backgroundColor="#EF4444"
                    borderRadius="$4"
                    onPress={confirmDelete}
                    disabled={isDeleting}
                    pressStyle={{ opacity: 0.8 }}
                  >
                    <Text color="#fff" fontWeight="700">
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

================================================
📄 ARCHIVO: src\pages\forgot-password\ui\ForgotPasswordPage.tsx
================================================

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

================================================
📄 ARCHIVO: src\pages\home\ui\HomePage.tsx
================================================

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

================================================
📄 ARCHIVO: src\pages\login\ui\LoginPage.tsx
================================================

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
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Hero top */}
          <View style={styles.hero}>
            <View style={styles.logoCircle}>
              <Text style={styles.logoEmoji}>🔐</Text>
            </View>
            <Text style={styles.appName}>ESFOT Auth</Text>
            <Text style={styles.tagline}>Inicia sesión en tu cuenta</Text>
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
              placeholder="Tu contraseña"
            />

            <TouchableOpacity
              onPress={() => router.push("/(auth)/forgot-password")}
              style={styles.forgotRow}
            >
              <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <Button
              onPress={handleLogin}
              isLoading={login.isPending}
              label="Iniciar sesión"
            />

            {/* Separador */}
            <View style={styles.separatorRow}>
              <View style={styles.separatorLine} />
              <Text style={styles.separatorText}>o continúa con</Text>
              <View style={styles.separatorLine} />
            </View>

            {/* Google */}
            <TouchableOpacity
              onPress={handleGoogleSignIn}
              activeOpacity={0.85}
              disabled={googleLoading}
              style={[styles.googleBtn, googleLoading && { opacity: 0.6 }]}
            >
              <FontAwesome name="google" size={18} color="#DB4437" />
              <Text style={styles.googleBtnLabel}>
                {googleLoading ? "Conectando..." : "Continuar con Google"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            style={styles.footerRow}
          >
            <Text style={styles.footerText}>
              ¿No tienes cuenta?{" "}
              <Text style={styles.footerLink}>Regístrate</Text>
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
    backgroundColor: theme.colors.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    ...theme.shadow.subtle,
  },
  logoEmoji: {
    fontSize: 36,
  },
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
    fontWeight: "400",
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
  forgotRow: {
    alignSelf: "flex-end",
    marginTop: -4,
  },
  forgotText: {
    color: theme.colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },
  separatorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },
  separatorText: {
    color: theme.colors.textMuted,
    fontSize: 12,
    fontWeight: "500",
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.bg,
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    gap: 10,
    ...theme.shadow.subtle,
  },
  googleBtnLabel: {
    color: theme.colors.text,
    fontSize: 15,
    fontWeight: "600",
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
});

================================================
📄 ARCHIVO: src\pages\register\ui\RegisterPage.tsx
================================================

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

================================================
📄 ARCHIVO: src\shared\api\supabase.ts
================================================

import { createClient } from "@supabase/supabase-js";
import * as SecureStore from "expo-secure-store";

const supabaseUrl     = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

const CHUNK_SIZE = 1800;

const SecureStoreAdapter = {
  getItem: async (key: string): Promise<string | null> => {
    const count = await SecureStore.getItemAsync(`${key}_count`);
    if (!count) return SecureStore.getItemAsync(key);

    const chunks: string[] = [];
    for (let i = 0; i < parseInt(count); i++) {
      const chunk = await SecureStore.getItemAsync(`${key}_${i}`);
      if (!chunk) return null;
      chunks.push(chunk);
    }
    return chunks.join("");
  },

  setItem: async (key: string, value: string): Promise<void> => {
    if (value.length <= CHUNK_SIZE) {
      await SecureStore.setItemAsync(key, value);
      return;
    }
    const chunks = Math.ceil(value.length / CHUNK_SIZE);
    await SecureStore.setItemAsync(`${key}_count`, String(chunks));
    for (let i = 0; i < chunks; i++) {
      await SecureStore.setItemAsync(
        `${key}_${i}`,
        value.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE)
      );
    }
  },

  removeItem: async (key: string): Promise<void> => {
    const count = await SecureStore.getItemAsync(`${key}_count`);
    if (count) {
      for (let i = 0; i < parseInt(count); i++) {
        await SecureStore.deleteItemAsync(`${key}_${i}`);
      }
      await SecureStore.deleteItemAsync(`${key}_count`);
    }
    await SecureStore.deleteItemAsync(key);
  },
};

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage:            SecureStoreAdapter,
    autoRefreshToken:   true,
    persistSession:     true,
    detectSessionInUrl: true, // ← necesario para OAuth
  },
});

================================================
📄 ARCHIVO: src\shared\ui\Button.tsx
================================================

import {
  TouchableOpacity, Text, ActivityIndicator, StyleSheet
} from "react-native";
import { theme } from "@/core/styles/theme";

interface ButtonProps {
  onPress:    () => void;
  label:      string;
  isLoading?: boolean;
  variant?:   "primary" | "ghost" | "danger" | "soft";
  disabled?:  boolean;
}

export const Button = ({
  onPress, label, isLoading, variant = "primary", disabled
}: ButtonProps) => {
  const isDisabled = disabled || isLoading;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.base, styles[variant], isDisabled && styles.disabled]}
      activeOpacity={0.8}
    >
      {isLoading
        ? <ActivityIndicator color={variant === "ghost" || variant === "soft" ? theme.colors.primary : "#fff"} />
        : <Text style={[styles.label, (variant === "ghost" || variant === "soft") && styles.labelAlt]}>
            {label}
          </Text>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.radius.md,
    paddingVertical: 15,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 52,
  },
  primary: {
    backgroundColor: theme.colors.primary,
    ...theme.shadow.button,
  },
  ghost: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: theme.colors.primary,
  },
  soft: {
    backgroundColor: theme.colors.primaryLight,
  },
  danger: {
    backgroundColor: theme.colors.danger,
  },
  disabled: { opacity: 0.5 },
  label: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
    letterSpacing: 0.1,
  },
  labelAlt: {
    color: theme.colors.primary,
  },
});

================================================
📄 ARCHIVO: src\shared\ui\Input.tsx
================================================

import { useState } from "react";
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity
} from "react-native";
import { theme } from "@/core/styles/theme";

interface InputProps {
  label:            string;
  value:            string;
  onChangeText:     (t: string) => void;
  placeholder?:     string;
  secureTextEntry?: boolean;
  keyboardType?:    "default" | "email-address" | "numeric";
  error?:           string;
  autoCapitalize?:  "none" | "sentences" | "words";
  showPasswordPolicy?: boolean;
}

interface PolicyRule {
  label: string;
  test:  (v: string) => boolean;
}

const rules: PolicyRule[] = [
  { label: "Mínimo 8 caracteres",                     test: v => v.length >= 8 },
  { label: "Al menos una mayúscula",                   test: v => /[A-Z]/.test(v) },
  { label: "Al menos una minúscula",                   test: v => /[a-z]/.test(v) },
  { label: "Al menos un carácter especial (!@#$...)",  test: v => /[^A-Za-z0-9]/.test(v) },
];

export const Input = ({
  label, value, onChangeText, placeholder,
  secureTextEntry, keyboardType = "default", error,
  autoCapitalize = "none", showPasswordPolicy = false,
}: InputProps) => {
  const [visible, setVisible] = useState(false);
  const isPassword = secureTextEntry;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <View style={[styles.inputRow, !!error && styles.inputRowError]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.textMuted}
          secureTextEntry={isPassword && !visible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          style={[styles.input, isPassword && styles.inputWithIcon]}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setVisible(v => !v)}
            style={styles.eyeBtn}
            activeOpacity={0.7}
          >
            <Text style={styles.eyeIcon}>{visible ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Password policy */}
      {showPasswordPolicy && isPassword && value.length > 0 && (
        <View style={styles.policy}>
          {rules.map(rule => {
            const ok = rule.test(value);
            return (
              <View key={rule.label} style={styles.policyRow}>
                <View style={[styles.policyDot, ok ? styles.policyDotOk : styles.policyDotFail]} />
                <Text style={ok ? styles.policyOk : styles.policyFail}>
                  {rule.label}
                </Text>
              </View>
            );
          })}
        </View>
      )}

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  label: {
    fontSize: 13,
    fontWeight: "600",
    color: theme.colors.textMid,
    letterSpacing: 0.1,
  },
  inputRow: {
    position: "relative",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.inputBg,
  },
  inputRowError: {
    borderColor: theme.colors.danger,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 15,
    color: theme.colors.text,
    backgroundColor: "transparent",
  },
  inputWithIcon: { paddingRight: 48 },
  eyeBtn: {
    position: "absolute",
    right: 12,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  eyeIcon: { fontSize: 17 },
  policy: {
    backgroundColor: theme.colors.bgMuted,
    borderRadius: theme.radius.sm,
    padding: 12,
    gap: 6,
    marginTop: 4,
  },
  policyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  policyDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  policyDotOk:   { backgroundColor: theme.colors.success },
  policyDotFail: { backgroundColor: theme.colors.border },
  policyOk:   { fontSize: 12, color: theme.colors.success, fontWeight: "500" },
  policyFail: { fontSize: 12, color: theme.colors.textMuted },
  error: { fontSize: 12, color: theme.colors.danger, fontWeight: "500" },
});

================================================
📄 ARCHIVO: tamagui.config.ts
================================================

import { config as tamaguiConfig } from "@tamagui/config";
import { createTamagui } from "tamagui";

const config = createTamagui(tamaguiConfig);

export default config;
export type AppConfig = typeof config;

================================================
📄 ARCHIVO: tsconfig.json
================================================

{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".expo/types/**/*.ts",
    "expo-env.d.ts"
  ],
  "exclude": ["apps/**"]
}
