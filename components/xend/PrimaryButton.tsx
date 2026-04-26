import * as Haptics from 'expo-haptics';
import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { XendColors, XendRadii } from '@/constants/xend-theme';

type Props = {
  label: string;
  onPress: () => void;
  variant?: 'navy' | 'blue' | 'outline';
  icon?: "google" | "apple" | "email" | null;
  style?: ViewStyle;
  left?: ReactNode;
};

export function PrimaryButton({ label, onPress, variant = 'navy', style, left, icon }: Props,) {
  const isOutline = variant === 'outline';
  return (
    <Pressable
      onPress={() => {
        if (process.env.EXPO_OS === 'ios') {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        } 
        onPress();
      }}
      style={({ pressed }) => [
        styles.base,
        variant === 'navy' && styles.navy,
        variant === 'blue' && styles.blue,
        isOutline && styles.outline,
        pressed && { opacity: 0.92 },
        style,
      ]}>
      {left ? (
        <View style={styles.row}>
          {left}
          <Text style={[styles.label, isOutline && styles.labelOutline]}>{label}</Text>
        </View>
      ) : (
        <Text style={[styles.label, isOutline && styles.labelOutline]}>{label}</Text>
      )}
      {icon && (
        <View style={styles.icon}>
          {icon === "google" && <FontAwesome name="google" size={20} color={XendColors.primaryBlue} />}
          {icon === "apple" && <FontAwesome name="apple" size={20} color={XendColors.white} />}
          {icon === "email" && <Ionicons name="mail-outline" size={20} color={XendColors.white} />}
        </View>
      )}

    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: XendRadii.pill,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  navy: { backgroundColor: XendColors.navyButton },
  blue: { backgroundColor: XendColors.primaryBlue },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: XendColors.primaryBlue,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  label: { color: XendColors.white, fontSize: 16, fontWeight: '700' },
  labelOutline: { color: XendColors.white },
  icon: { position: 'absolute', left: 50 },
});
