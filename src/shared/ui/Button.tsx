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