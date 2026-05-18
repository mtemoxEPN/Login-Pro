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