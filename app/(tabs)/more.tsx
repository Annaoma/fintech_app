import { useState } from "react";
import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity, SafeAreaView, Switch
} from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { XendColors } from "@/constants/xend-theme";

// ── Settings rows data ────────────────────────────────────────────────────────
// Keeping it as data means you can add/remove rows without touching JSX
const SETTINGS = [
  {
    id: "account",
    title: "Account Settings",
    sub: "Edit your profile and next of kin",
    icon: "person-outline",
    lib: "ion",
    type: "chevron",
    route: "/account-settings",
  },
  {
    id: "phone",
    title: "Verify Phone Number",
    sub: "Enable OTP notifications",
    icon: "shield-checkmark-outline",
    lib: "ion",
    type: "chevron",
    route: "/verify-phone",
  },
  {
    id: "kyc",
    title: "KYC Verification",
    sub: "Complete your KYC",
    icon: "card-outline",
    lib: "ion",
    type: "chevron",
    route: "/kyc",
  },
  {
    id: "support",
    title: "Support",
    sub: "Chat with our support agents",
    icon: "chatbubble-ellipses-outline",
    lib: "ion",
    type: "chevron",
    route: "/support",
  },
  {
    id: "biometrics",
    title: "Biometrics",
    sub: "Enable Secure Login",
    icon: "finger-print",           // Ionicons fingerprint
    lib: "ion",
    type: "toggle",                 // renders a Switch instead of chevron
    route: null,
  },
  {
    id: "security",
    title: "Security",
    sub: "Add an extra layer of security",
    icon: "shield-outline",
    lib: "ion",
    type: "chevron",
    route: "/security",
  },
];

// ── Row icon renderer ─────────────────────────────────────────────────────────
function RowIcon({ icon }: { icon: string }) {
  return <Ionicons name={icon as any} size={18} color="#4a6cf7" />;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function MoreScreen() {
  const router = useRouter();
  const [biometricsEnabled, setBiometricsEnabled] = useState(false);

  return (
    <SafeAreaView style={s.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={s.scroll}>

        {/* ── HEADER ──────────────────────────────────── */}
        <View style={s.headerRow}>
          <Text style={s.pageTitle}>Account</Text>
          {/* Three vertical dots */}
          <TouchableOpacity style={s.kebab}>
            {[0, 1, 2].map((i) => <View key={i} style={s.kebabDot} />)}
          </TouchableOpacity>
        </View>

        {/* ── PROFILE ROW ─────────────────────────────── */}
        <View style={s.profileRow}>
          <View style={s.profileLeft}>
            <View style={s.profileAvatar}>
              <Ionicons name="person" size={22} color="#6b7280" />
            </View>
            <Text style={s.profileName}>@Anna_Chris</Text>
          </View>
          {/* Copy username button */}
          <TouchableOpacity>
            <Ionicons name="copy-outline" size={18} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        {/* ── REFERRAL BANNER ─────────────────────────── */}
        <TouchableOpacity
          style={s.referralBanner}
          onPress={() => router.push("/(tabs)/referral")}
        >
          <View>
            <Text style={s.referralTitle}>Referral</Text>
            <Text style={s.referralSub}>Refer friends and earn points</Text>
          </View>
          <View style={s.referralRight}>
            <Text style={{ fontSize: 22 }}>🏆</Text>
            <View style={s.referralChevronWrap}>
              <Ionicons name="chevron-forward" size={14} color="#fff" />
            </View>
          </View>
        </TouchableOpacity>

        {/* ── SETTINGS CARD ───────────────────────────── */}
        <View style={s.settingsCard}>
          {SETTINGS.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={[
                s.settingsRow,
                index < SETTINGS.length - 1 && s.settingsRowBorder,
              ]}
              // Only navigate if it's a chevron row with a route
              onPress={() => item.route && router.push(item.route as any)}
              activeOpacity={item.type === "toggle" ? 1 : 0.6}
            >
              {/* Icon box */}
              <View style={s.iconWrap}>
                <RowIcon icon={item.icon} />
              </View>

              {/* Text */}
              <View style={s.settingsInfo}>
                <Text style={s.settingsTitle}>{item.title}</Text>
                <Text style={s.settingsSub}>{item.sub}</Text>
              </View>

              {/* Right side: chevron OR toggle */}
              {item.type === "chevron" ? (
                <View style={s.chevronWrap}>
                  <Ionicons name="chevron-forward" size={13} color="#6b7280" />
                </View>
              ) : (
                // React Native's built-in Switch component
                <Switch
                  value={biometricsEnabled}
                  onValueChange={setBiometricsEnabled}
                  trackColor={{ false: "#2a2a3e", true: "#2040c8" }}
                  thumbColor="#ffffff"
                  ios_backgroundColor="#2a2a3e"
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
                        alignItems: "center", paddingTop: 10, paddingBottom: 14 },
  pageTitle:          { color: "#fff", fontSize: 28, fontWeight: "800", letterSpacing: -0.3 },
  kebab:              { gap: 4, padding: 6, paddingHorizontal: 2 },
  kebabDot:           { width: 4, height: 4, borderRadius: 2, backgroundColor: "#9ca3af" },

  // Profile row
  profileRow:         { flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between", padding: 12,
                        backgroundColor: "#13131a", borderRadius: 14, marginBottom: 12 },
  profileLeft:        { flexDirection: "row", alignItems: "center", gap: 12 },
  profileAvatar:      { width: 48, height: 48, borderRadius: 22,
                        backgroundColor: "#1e1e2c", borderWidth: 1.5,
                        borderColor: XendColors.primaryBlue, alignItems: "center", justifyContent: "center" },
  profileName:        { color: "#fff", fontSize: 20, fontWeight: "700" },

  // Referral banner
  referralBanner:     { backgroundColor: "#2040c8", borderRadius: 14,
                        padding: 14, marginBottom: 14,
                        flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between" },
  referralTitle:      { color: "#fff", fontSize: 20, fontWeight: "700", marginBottom: 2 },
  referralSub:        { color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: "400" },
  referralRight:      { flexDirection: "row", alignItems: "center", gap: 8 },
  referralChevronWrap:{ width: 28, height: 28, borderRadius: 14,
                        backgroundColor: "rgba(255,255,255,0.15)",
                        alignItems: "center", justifyContent: "center" },

  // Settings card
  settingsCard:       { backgroundColor: "#13131a", borderRadius: 16, overflow: "hidden" },
  settingsRow:        { flexDirection: "row", alignItems: "center", padding: 14 },
  settingsRowBorder:  { borderBottomWidth: 1, borderBottomColor: "#1a1a24" },
  iconWrap:           { width: 36, height: 36, borderRadius: 10,
                        backgroundColor: "#1e1e2c",
                        alignItems: "center", justifyContent: "center",
                        marginRight: 12, flexShrink: 0 },
  settingsInfo:       { flex: 1 },
  settingsTitle:      { color: "#fff", fontSize: 18, fontWeight: "600", marginBottom: 2 },
  settingsSub:        { color: "#b8b9bb", fontSize: 12 },
  chevronWrap:        { width: 26, height: 26, borderRadius: 13,
                        backgroundColor: "#1e1e2c",
                        alignItems: "center", justifyContent: "center", flexShrink: 0 },
});