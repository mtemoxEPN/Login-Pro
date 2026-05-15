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