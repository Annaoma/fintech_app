import { useState } from "react";
import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity, SafeAreaView, Switch
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SETTINGS_ROWS = [
  {
    id: "account",
    icon: "person-outline",
    iconLib: "ion",
    title: "Account Settings",
    subtitle: "Edit your profile and next of kin",
    type: "chevron",
    route: "/account-settings",
  },
  {
    id: "phone",
    icon: "shield-outline",
    iconLib: "ion",
    title: "Verify Phone Number",
    subtitle: "Enable OTP notifications",
    type: "chevron",
    route: "/verify-phone",
  },
  {
    id: "kyc",
    icon: "card-outline",
    iconLib: "ion",
    title: "KYC Verification",
    subtitle: "Complete your KYC",
    type: "chevron",
    route: "/kyc",
  },
  {
    id: "support",
    icon: "chatbubble-outline",
    iconLib: "ion",
    title: "Support",
    subtitle: "Chat with our support agents",
    type: "chevron",
    route: "/support",
  },
  {
    id: "biometrics",
    icon: "finger-print",
    iconLib: "ion",
    title: "Biometrics",
    subtitle: "Enable Secure Login",
    type: "toggle",      // ← renders a Switch, not a chevron
    route: null,
  },
  {
    id: "security",
    icon: "shield-checkmark-outline",
    iconLib: "ion",
    title: "Security",
    subtitle: "Add an extra layer of security",
    type: "chevron",
    route: "/security",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function MoreScreen() {
  const router = useRouter();
  const [biometrics, setBiometrics] = useState(false); // toggle state

  return (
    <SafeAreaView style={s.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={s.scroll}>

        {/* ── HEADER ─────────────────────────────────────────── */}
        <View style={s.headerRow}>
          <Text style={s.pageTitle}>Account</Text>
          {/* 3-dot vertical menu */}
          <TouchableOpacity style={s.dotsBtn}>
            <Ionicons name="ellipsis-vertical" size={20} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        {/* ── PROFILE ROW ────────────────────────────────────── */}
        <View style={s.profileRow}>
          <View style={s.profileLeft}>
            <View style={s.profileAvatar}>
              <Ionicons name="person-outline" size={24} color="#6b7280" />
            </View>
            <Text style={s.profileName}>@Anna_Chris</Text>
          </View>
          {/* Copy username button */}
          <TouchableOpacity style={s.copyBtn}>
            <Ionicons name="copy-outline" size={20} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        {/* ── REFERRAL BANNER ────────────────────────────────── */}
        <TouchableOpacity
          style={s.referralBanner}
          onPress={() => router.push("/(tabs)/referral")}
          activeOpacity={0.85}
        >
          <View style={s.referralLeft}>
            {/* Trophy icon in a frosted circle */}
            <View style={s.referralIconBox}>
              <MaterialIcons name="emoji-events" size={20} color="#fbbf24" />
            </View>
            <View>
              <Text style={s.referralTitle}>Referral</Text>
              <Text style={s.referralSubtitle}>Refer friends and earn points</Text>
            </View>
          </View>
          {/* Frosted chevron circle */}
          <View style={s.referralChevron}>
            <Ionicons name="chevron-forward" size={14} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* ── SETTINGS CARD ──────────────────────────────────── */}
        {/* All 6 rows live inside one rounded card */}
        <View style={s.settingsCard}>
          {SETTINGS_ROWS.map((row, index) => (
            <TouchableOpacity
              key={row.id}
              style={[
                s.settingsRow,
                // Add separator line under every row except the last
                index < SETTINGS_ROWS.length - 1 && s.settingsRowBorder,
              ]}
              // Disable press feedback on toggle rows
              activeOpacity={row.type === "toggle" ? 1 : 0.7}
              onPress={() => {
                if (row.type === "chevron" && row.route) {
                  router.push(row.route as any);
                }
              }}
            >
              {/* Icon box */}
              <View style={s.settingsIconBox}>
                <Ionicons name={row.icon as any} size={18} color="#6b7280" />
              </View>

              {/* Text */}
              <View style={s.settingsText}>
                <Text style={s.settingsTitle}>{row.title}</Text>
                <Text style={s.settingsSubtitle}>{row.subtitle}</Text>
              </View>

              {/* Right — either chevron or toggle */}
              {row.type === "chevron" ? (
                <View style={s.rowChevron}>
                  <Ionicons name="chevron-forward" size={13} color="#9ca3af" />
                </View>
              ) : (
                // Switch styled to match design — grey when off
                <Switch
                  value={biometrics}
                  onValueChange={setBiometrics}
                  trackColor={{ false: "#374151", true: "#2040c8" }}
                  thumbColor="#ffffff"
                  ios_backgroundColor="#374151"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const s = StyleSheet.create({
  container:          { flex: 1, backgroundColor: "#0e0e14" },
  scroll:             { paddingHorizontal: 20, paddingBottom: 100 },

  // Header
  headerRow:          { flexDirection: "row", justifyContent: "space-between",
                        alignItems: "center", marginTop: 8, marginBottom: 20 },
  pageTitle:          { color: "#fff", fontSize: 30, fontWeight: "800",
                        letterSpacing: -0.3 },
  dotsBtn:            { width: 36, height: 36,
                        alignItems: "center", justifyContent: "center" },

  // Profile row
  profileRow:         { flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between", marginBottom: 16 },
  profileLeft:        { flexDirection: "row", alignItems: "center", gap: 12 },
  profileAvatar:      { width: 48, height: 48, borderRadius: 24,
                        backgroundColor: "#1e1e2e",
                        borderWidth: 2, borderColor: "#5656cf",
                        alignItems: "center", justifyContent: "center" },
  profileName:        { color: "#fff", fontSize: 20, fontWeight: "700" },
  copyBtn:            { width: 34, height: 34,
                        alignItems: "center", justifyContent: "center" },

  // Referral banner
  referralBanner:     { backgroundColor: "#2040c8", borderRadius: 14,
                        padding: 16, flexDirection: "row",
                        alignItems: "center", justifyContent: "space-between",
                        marginBottom: 18 },
  referralLeft:       { flexDirection: "row", alignItems: "center", gap: 14 },
  referralIconBox:    { width: 38, height: 38, borderRadius: 10,
                        backgroundColor: "rgba(255,255,255,0.15)",
                        alignItems: "center", justifyContent: "center" },
  referralTitle:      { color: "#fff", fontSize: 18, fontWeight: "700",
                        marginBottom: 3 },
  referralSubtitle:   { color: "#ffff", fontSize: 12 },
  referralChevron:    { width: 28, height: 28, borderRadius: 14,
                        backgroundColor: "rgba(255,255,255,0.2)",
                        alignItems: "center", justifyContent: "center" },

  // Settings card
  settingsCard:       { backgroundColor: "#13131a", borderRadius: 16,
                        overflow: "hidden" },
  settingsRow:        { flexDirection: "row", alignItems: "center",
                        padding: 16, gap: 14 },
  settingsRowBorder:  { borderBottomWidth: 1, borderBottomColor: "#1e1e2e" },
  settingsIconBox:    { width: 36, height: 36, borderRadius: 10,
                        backgroundColor: "#1a1a28",
                        alignItems: "center", justifyContent: "center",
                        flexShrink: 0 },
  settingsText:       { flex: 1 },
  settingsTitle:      { color: "#fff", fontSize: 14, fontWeight: "600",
                        marginBottom: 2 },
  settingsSubtitle:   { color: "#6b7280", fontSize: 11 },
  rowChevron:         { width: 28, height: 28, borderRadius: 14,
                        backgroundColor: "#1e1e2e",
                        alignItems: "center", justifyContent: "center" },
});