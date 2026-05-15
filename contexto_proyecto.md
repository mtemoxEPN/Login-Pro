# Contexto Completo del Proyecto CV-CREATOR-APP


================================================
📄 ARCHIVO: .env
================================================

EXPO_PUBLIC_SUPABASE_URL=https://vauleodjbthbocismnqb.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_hDgFcwVt46uPDegLkC2xSg_L2T5nnv9
EXPO_PUBLIC_WEB_URL=http://localhost:5173

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

import { useEffect } from "react";
import { Stack, router } from "expo-router";
import { QueryProvider } from "@/core/providers/QueryProvider";
import { useSession } from "@/features/session/model/useSession";

function AuthGuard() {
  const { isAuthenticated, isLoading } = useSession();

  useEffect(() => {
    if (isLoading) return;

    if (isAuthenticated) {
      router.replace("/home");
    } else {
      router.replace("/(auth)/login");
    }
  }, [isAuthenticated, isLoading]);

  return null;
}

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack screenOptions={{ headerShown: false }} />
      <AuthGuard />
    </QueryProvider>
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
      "predictiveBackGestureEnabled": false
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
      "expo-secure-store"
    ],
    "experiments": {
      "typedRoutes": true,
      "reactCompiler": true
    }
  }
}


================================================
📄 ARCHIVO: apps\web\.env
================================================

VITE_SUPABASE_URL=https://vauleodjbthbocismnqb.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_hDgFcwVt46uPDegLkC2xSg_L2T5nnv9

EXPO_PUBLIC_WEB_URL=https://auth-esfot-web-ivory.vercel.app

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
📄 ARCHIVO: apps\web\.vercel\project.json
================================================

{"projectId":"prj_ZCjixr9JK0ze4ZuWySP2rZjBNycR","orgId":"team_g5v5AXuIwlXuiTmqJv0oWj7Z","projectName":"auth-esfot-web"}

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
📄 ARCHIVO: apps\web\tsconfig.tsbuildinfo
================================================

{"root":["./src/main.tsx","./src/app/app.tsx","./src/app/router.tsx","./src/features/confirm-email/model/useconfirmemail.ts","./src/features/reset-password/model/useresetpassword.ts","./src/features/reset-password/ui/resetpasswordform.tsx","./src/pages/confirm-email/ui/confirmemailpage.tsx","./src/pages/reset-password/ui/resetpasswordpage.tsx","./src/shared/api/supabase.ts","./src/shared/ui/button.tsx","./src/shared/ui/input.tsx","./vite-env.d.ts"],"version":"6.0.3"}

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

module.exports = function(api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            ["module-resolver", { root: ["./src"], alias: { "@": "./src" } }],
        ],
    };
};

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
    "android": "expo start --android",
    "ios": "expo start --ios",
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
    "@tanstack/react-query": "^5.100.10",
    "expo": "~54.0.33",
    "expo-constants": "~18.0.13",
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
    "expo-web-browser": "~15.0.10",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-reanimated": "~4.1.1",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-web": "~0.21.0",
    "react-native-worklets": "0.5.1"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "babel-plugin-module-resolver": "^5.0.3",
    "eslint": "^9.25.0",
    "eslint-config-expo": "~10.0.0",
    "typescript": "~5.9.2"
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

// Token de diseño centralizado.
// Importar desde aquí en todos los StyleSheet.create()
export const theme = {
  colors: {
    primary:     "#1B3A6B",
    primaryDark: "#142D54",
    accent:      "#2563EB",
    success:     "#059669",
    danger:      "#DC2626",
    warning:     "#D97706",
    bg:          "#F0F4FF",
    card:        "#FFFFFF",
    text:        "#0F172A",
    textMid:     "#334155",
    textMuted:   "#64748B",
    border:      "#CBD5E1",
    inputBg:     "#F8FAFC",
  },
  radius: {
    sm: 8, md: 12, lg: 16, xl: 20, full: 9999,
  },
  spacing: {
    xs:4, sm:8, md:16, lg:24, xl:32,
  },
  shadow: {
    card: {
      shadowColor: "#1B3A6B",
      shadowOpacity: 0.12,
      shadowRadius: 20,
      shadowOffset: { width:0, height:8 },
      elevation: 8,
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
📄 ARCHIVO: src\pages\forgot-password\ui\ForgotPasswordPage.tsx
================================================

import { useState } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
  Platform, Alert, TouchableOpacity
} from "react-native";
import { router }            from "expo-router";
import { useForgotPassword } from "@/features/auth/model/useForgotPassword";
import { Input }             from "@/shared/ui/Input";
import { Button }            from "@/shared/ui/Button";
import { theme }             from "@/core/styles/theme";
 
export const ForgotPasswordPage = () => {
  const [email,   setEmail]   = useState("");
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
      <View style={styles.successContainer}>
        <Text style={styles.icon}>📧</Text>
        <Text style={styles.successTitle}>¡Email enviado!</Text>
        <Text style={styles.successText}>
          Revisa tu bandeja de entrada en{" "}
          <Text style={{ fontWeight:"700" }}>{email}</Text>.
          {"  "}Haz clic en el link del email para
          establecer tu nueva contraseña.
          {"  "}Una vez cambiada, regresa aquí e inicia sesión.
        </Text>
        <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
          <Text style={styles.link}>← Volver al inicio de sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }
 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
    >
      <View style={styles.inner}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backBtn}
        >
          <Text style={styles.backText}>← Volver</Text>
        </TouchableOpacity>
 
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.logo}>🔑</Text>
            <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
            <Text style={styles.subtitle}>
              Te enviaremos un email para restablecerla
            </Text>
          </View>
          <View style={styles.form}>
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
      </View>
    </KeyboardAvoidingView>
  );
};
 
const styles = StyleSheet.create({
  container:        { flex:1, backgroundColor: theme.colors.bg },
  inner:            { flex:1, justifyContent:"center", padding:24 },
  backBtn:          { marginBottom:16 },
  backText:         { color: theme.colors.accent, fontSize:16 },
  card:             { backgroundColor: theme.colors.card, borderRadius:20,
                      overflow:"hidden", ...theme.shadow.card },
  header:           { backgroundColor: theme.colors.primary, padding:32,
                      alignItems:"center" },
  logo:             { fontSize:52, marginBottom:12 },
  title:            { color:"#fff", fontSize:22, fontWeight:"700",
                      textAlign:"center", marginBottom:8 },
  subtitle:         { color:"rgba(255,255,255,0.75)", fontSize:13,
                      textAlign:"center" },
  form:             { padding:28, gap:16 },
  successContainer: { flex:1, backgroundColor: theme.colors.bg,
                      justifyContent:"center", alignItems:"center", padding:32 },
  icon:             { fontSize:72, marginBottom:24 },
  successTitle:     { fontSize:26, fontWeight:"700",
                      color: theme.colors.primary, marginBottom:16 },
  successText:      { fontSize:16, color: theme.colors.textMid,
                      textAlign:"center", lineHeight:24, marginBottom:32 },
  link:             { color: theme.colors.accent, fontSize:15, fontWeight:"600" },
});


================================================
📄 ARCHIVO: src\pages\home\ui\HomePage.tsx
================================================

import {
  View, Text, StyleSheet, SafeAreaView,
  TouchableOpacity, Alert
} from "react-native";
import { useSession } from "@/features/session/model/useSession";
import { Button }     from "@/shared/ui/Button";
import { theme }      from "@/core/styles/theme";
 
export const HomePage = () => {
  const { user, signOut } = useSession();
 
  const handleSignOut = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que deseas salir?",
      [
        { text:"Cancelar", style:"cancel" },
        {
          text: "Salir",
          style: "destructive",
          onPress: () => signOut(),
        },
      ]
    );
  };
 
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
 
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerIcon}>🎓</Text>
          <Text style={styles.headerTitle}>ESFOT</Text>
          <Text style={styles.headerSub}>Tecnología Superior en Desarrollo de Software</Text>
        </View>
 
        {/* Mensaje principal */}
        <View style={styles.card}>
          <Text style={styles.welcomeIcon}>🚀</Text>
          <Text style={styles.welcomeTitle}>¡Bienvenido, lo lograste,{" "}tecnólogo de la ESFOT!</Text>
          <View style={styles.divider} />
          <Text style={styles.challengeText}>
            ¿No fue tan difícil... o sí? 😄
          </Text>
          <Text style={styles.emailText}>{user?.email}</Text>
        </View>
 
        {/* Logros */}
        <View style={styles.achievementsCard}>
          <Text style={styles.achievementsTitle}>Lo que implementaste:</Text>
          {[
            "✅ Autenticación con Supabase Auth",
            "✅ Tokens persistidos con SecureStore",
            "✅ Estado de sesión con TanStack Query",
            "✅ Arquitectura Feature-Sliced Design",
            "✅ Expo Router con TypeScript",
            "✅ App web en Vercel para auth flows",
          ].map(item => (
            <Text key={item} style={styles.achievement}>{item}</Text>
          ))}
        </View>
 
        {/* Botón de logout */}
        <Button
          onPress={handleSignOut}
          label="Cerrar sesión"
          variant="ghost"
        />
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  safe:              { flex:1, backgroundColor: theme.colors.bg },
  container:         { flex:1, padding:24, gap:20 },
  header:            { backgroundColor: theme.colors.primary, borderRadius:16,
                       padding:24, alignItems:"center", ...theme.shadow.card },
  headerIcon:        { fontSize:48, marginBottom:8 },
  headerTitle:       { color:"#fff", fontSize:28, fontWeight:"800" },
  headerSub:         { color:"rgba(255,255,255,0.75)", fontSize:12,
                       textAlign:"center", marginTop:4 },
  card:              { backgroundColor: theme.colors.card, borderRadius:16,
                       padding:28, alignItems:"center", ...theme.shadow.card },
  welcomeIcon:       { fontSize:56, marginBottom:16 },
  welcomeTitle:      { fontSize:22, fontWeight:"800", color: theme.colors.primary,
                       textAlign:"center", lineHeight:30, marginBottom:16 },
  divider:           { width:"100%", height:1,
                       backgroundColor: theme.colors.border, marginVertical:12 },
  challengeText:     { fontSize:18, color: theme.colors.textMid,
                       fontWeight:"600", marginBottom:8 },
  emailText:         { fontSize:13, color: theme.colors.textMuted },
  achievementsCard:  { backgroundColor: theme.colors.card, borderRadius:16,
                       padding:20, gap:8, ...theme.shadow.card },
  achievementsTitle: { fontSize:15, fontWeight:"700",
                       color: theme.colors.primary, marginBottom:8 },
  achievement:       { fontSize:14, color: theme.colors.textMid },
});


================================================
📄 ARCHIVO: src\pages\login\ui\LoginPage.tsx
================================================

import { useState } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
  Platform, Alert, TouchableOpacity, ScrollView
} from "react-native";
import { router }          from "expo-router";
import { useLogin }        from "@/features/auth/model/useLogin";
import { Input }           from "@/shared/ui/Input";
import { Button }          from "@/shared/ui/Button";
import { theme }           from "@/core/styles/theme";
 
export const LoginPage = () => {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
 
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Campos requeridos", "Completa email y contraseña.");
      return;
    }
    try {
      await login.mutateAsync({ email, password });
      // La redirección ocurre automáticamente en _layout.tsx
      // cuando la sesión cambia y AuthGuard detecta isAuthenticated=true
    } catch (err: any) {
      Alert.alert("Error", err.message ?? "Credenciales incorrectas.");
    }
  };
 
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.logo}>🔐</Text>
            <Text style={styles.title}>Bienvenido</Text>
            <Text style={styles.subtitle}>ESFOT — Inicia sesión</Text>
          </View>
 
          {/* Formulario */}
          <View style={styles.form}>
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
              style={{ alignSelf:"flex-end" }}
            >
              <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <Button
              onPress={handleLogin}
              isLoading={login.isPending}
              label="Iniciar sesión"
            />
            <TouchableOpacity
              onPress={() => router.push("/(auth)/register")}
              style={{ alignItems:"center" }}
            >
              <Text style={styles.linkMuted}>
                ¿No tienes cuenta?{" "}
                <Text style={{ color: theme.colors.primary, fontWeight:"700" }}>
                  Regístrate
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
 
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor: theme.colors.bg },
  scroll:    { flexGrow:1, justifyContent:"center", padding:24 },
  card:      { backgroundColor: theme.colors.card, borderRadius:20,
               overflow:"hidden", ...theme.shadow.card },
  header:    { backgroundColor: theme.colors.primary, padding:32,
               alignItems:"center" },
  logo:      { fontSize:52, marginBottom:12 },
  title:     { color:"#fff", fontSize:26, fontWeight:"700", marginBottom:4 },
  subtitle:  { color:"rgba(255,255,255,0.75)", fontSize:14 },
  form:      { padding:28, gap:16 },
  link:      { color: theme.colors.accent, fontSize:14 },
  linkMuted: { color: theme.colors.textMuted, fontSize:14 },
});


================================================
📄 ARCHIVO: src\pages\register\ui\RegisterPage.tsx
================================================

import { useState } from "react";
import {
  View, Text, StyleSheet, KeyboardAvoidingView,
  Platform, Alert, TouchableOpacity, ScrollView
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
    if (password.length < 8) {
      Alert.alert("Contraseña débil", "Mínimo 8 caracteres.");
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
      <View style={styles.successContainer}>
        <Text style={styles.successIcon}>📬</Text>
        <Text style={styles.successTitle}>¡Revisa tu email!</Text>
        <Text style={styles.successText}>
          Te enviamos un link de confirmación a{" "}
          <Text style={{ fontWeight: "700" }}>{email}</Text>.
          {"  "}Confirma tu cuenta para poder iniciar sesión.
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.link}>← Volver al login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
    >
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.logo}>✨</Text>
            <Text style={styles.title}>Crear cuenta</Text>
            <Text style={styles.subtitle}>ESFOT — Únete ahora</Text>
          </View>
          <View style={styles.form}>
            <Input label="Correo electrónico" value={email}
              onChangeText={setEmail} keyboardType="email-address"
              placeholder="tu@correo.com" />
            <Input
              label="Contraseña"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Mínimo 8 caracteres"
              showPasswordPolicy   // ← agrega esto
            />
            <Input label="Confirmar contraseña" value={confirm}
              onChangeText={setConfirm} secureTextEntry
              placeholder="Repite tu contraseña" />
            <Button onPress={handleRegister}
              isLoading={register.isPending}
              label="Crear cuenta" />
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ alignItems: "center" }}
            >
              <Text style={styles.linkMuted}>
                ¿Ya tienes cuenta?{" "}
                <Text style={{ color: theme.colors.primary, fontWeight: "700" }}>
                  Inicia sesión
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.bg },
  scroll: { flexGrow: 1, justifyContent: "center", padding: 24 },
  card: {
    backgroundColor: theme.colors.card, borderRadius: 20,
    overflow: "hidden", ...theme.shadow.card
  },
  header: {
    backgroundColor: theme.colors.primary, padding: 32,
    alignItems: "center"
  },
  logo: { fontSize: 52, marginBottom: 12 },
  title: { color: "#fff", fontSize: 26, fontWeight: "700", marginBottom: 4 },
  subtitle: { color: "rgba(255,255,255,0.75)", fontSize: 14 },
  form: { padding: 28, gap: 16 },
  link: {
    color: theme.colors.accent, fontSize: 15,
    fontWeight: "600", marginTop: 8
  },
  linkMuted: { color: theme.colors.textMuted, fontSize: 14 },
  successContainer: {
    flex: 1, backgroundColor: theme.colors.bg,
    justifyContent: "center", alignItems: "center", padding: 32
  },
  successIcon: { fontSize: 72, marginBottom: 24 },
  successTitle: {
    fontSize: 26, fontWeight: "700",
    color: theme.colors.primary, marginBottom: 16
  },
  successText: {
    fontSize: 16, color: theme.colors.textMid,
    textAlign: "center", lineHeight: 24, marginBottom: 32
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
    detectSessionInUrl: false,
  },
});

================================================
📄 ARCHIVO: src\shared\ui\Button.tsx
================================================

import {
  TouchableOpacity, Text, ActivityIndicator, StyleSheet
} from "react-native";
 
interface ButtonProps {
  onPress:    () => void;
  label:      string;
  isLoading?: boolean;
  variant?:   "primary" | "ghost" | "danger";
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
        ? <ActivityIndicator color="#fff" />
        : <Text style={[styles.label, variant === "ghost" && styles.labelGhost]}>{label}</Text>
      }
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  base:        { borderRadius:12, paddingVertical:14, paddingHorizontal:24,
                 alignItems:"center", justifyContent:"center" },
  primary:     { backgroundColor:"#1B3A6B" },
  ghost:       { backgroundColor:"transparent", borderWidth:2, borderColor:"#1B3A6B" },
  danger:      { backgroundColor:"#DC2626" },
  disabled:    { opacity:0.5 },
  label:       { color:"#fff", fontSize:16, fontWeight:"600" },
  labelGhost:  { color:"#1B3A6B" },
});


================================================
📄 ARCHIVO: src\shared\ui\Input.tsx
================================================

import { useState } from "react";
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity
} from "react-native";

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
  { label: "Mínimo 8 caracteres",      test: v => v.length >= 8 },
  { label: "Al menos una mayúscula",   test: v => /[A-Z]/.test(v) },
  { label: "Al menos una minúscula",   test: v => /[a-z]/.test(v) },
  { label: "Al menos un carácter especial (!@#$...)", test: v => /[^A-Za-z0-9]/.test(v) },
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

      <View style={styles.inputRow}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#94A3B8"
          secureTextEntry={isPassword && !visible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          style={[styles.input, isPassword && styles.inputWithIcon, error ? styles.inputError : null]}
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

      {/* Política de contraseña */}
      {showPasswordPolicy && isPassword && value.length > 0 && (
        <View style={styles.policy}>
          {rules.map(rule => {
            const ok = rule.test(value);
            return (
              <View key={rule.label} style={styles.policyRow}>
                <Text style={ok ? styles.policyOk : styles.policyFail}>
                  {ok ? "✅" : "❌"} {rule.label}
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
  wrapper:       { gap: 6 },
  label:         { fontSize: 14, fontWeight: "500", color: "#334155" },
  inputRow:      { position: "relative", justifyContent: "center" },
  input:         {
    borderWidth: 1.5, borderColor: "#CBD5E1", borderRadius: 10,
    paddingHorizontal: 16, paddingVertical: 13, fontSize: 15,
    color: "#0F172A", backgroundColor: "#F8FAFC",
  },
  inputWithIcon: { paddingRight: 48 },
  inputError:    { borderColor: "#DC2626" },
  eyeBtn:        {
    position: "absolute", right: 12,
    height: "100%", justifyContent: "center", paddingHorizontal: 4,
  },
  eyeIcon:       { fontSize: 18 },
  policy:        {
    backgroundColor: "#F1F5F9", borderRadius: 8,
    padding: 10, gap: 4, marginTop: 4,
  },
  policyRow:     { flexDirection: "row", alignItems: "center" },
  policyOk:      { fontSize: 12, color: "#059669" },
  policyFail:    { fontSize: 12, color: "#DC2626" },
  error:         { fontSize: 12, color: "#DC2626" },
});

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
