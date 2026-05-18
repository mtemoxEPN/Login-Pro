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