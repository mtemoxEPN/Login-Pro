import { View, StyleSheet } from "react-native";

interface GlowOrbProps {
  color: string;       // ej: "rgba(200,240,60,0.35)"
  size?: number;
  style?: object;
}

export const GlowOrb = ({ color, size = 200, style }: GlowOrbProps) => (
  <View
    pointerEvents="none"
    style={[
      {
        position: "absolute",
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "transparent",
        // Simulamos radial-gradient con capas de opacidad
      },
      style,
    ]}
  >
    {/* Capa exterior — difusa */}
    <View style={[StyleSheet.absoluteFillObject, {
      borderRadius: size / 2,
      backgroundColor: color,
      opacity: 0.25,
    }]} />
    {/* Capa media */}
    <View style={[StyleSheet.absoluteFillObject, {
      margin: size * 0.2,
      borderRadius: size / 2,
      backgroundColor: color,
      opacity: 0.3,
    }]} />
    {/* Núcleo brillante */}
    <View style={[StyleSheet.absoluteFillObject, {
      margin: size * 0.38,
      borderRadius: size / 2,
      backgroundColor: color,
      opacity: 0.45,
    }]} />
  </View>
);