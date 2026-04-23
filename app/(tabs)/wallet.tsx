import { useState } from "react";
import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity, SafeAreaView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const QUICK_ACTIONS = [
  { id: "add", label: "Add Fund", icon: "add" },
  { id: "withdraw", label: "Withdraw", icon: "arrow-down-circle" },
  { id: "swap", label: "Swap", icon: "swap-vertical" },
  { id: "statement", label: "Statement", icon: "document-text" },
];

const FILTER_TABS = ["Stablecoins", "Utility", "Memes 🔥"];

const COINS = {
  Stablecoins: [
    { id: "cngn", letter: "N", name: "CNGN", subtitle: "Compliant Naira", color: "#7c3aed", balance1: "₦120,000", balance2: "$75" },
    { id: "usdt", letter: "T", name: "USDT", subtitle: "Tether USD", color: "#16a34a", balance1: "$250", balance2: "₦390,000" },
    { id: "usdc", letter: "S", name: "USDC", subtitle: "USD Coin", color: "#2563eb", balance1: "$90", balance2: "₦140,000" },
  ],
  Utility: [],
  "Memes 🔥": [],
};

export default function WalletScreen() {
  const [activeFilter, setActiveFilter] = useState("Stablecoins");
  const [showBalance, setShowBalance] = useState(false);

  const coins = COINS[activeFilter as keyof typeof COINS];

  return (
    <SafeAreaView style={s.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>

        <Text style={s.pageTitle}>Wallets</Text>

        <View style={s.portfolioCard}>
          <View style={s.portfolioTop}>
            <Text style={s.portfolioLabel}>My Asset Portfolio</Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Ionicons
                name={showBalance ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="rgba(255,255,255,0.85)"
              />
            </TouchableOpacity>
          </View>
          <Text style={s.portfolioBalance}>
            {showBalance ? "$1,234,546" : "* * * * * * * * * *"}
          </Text>
        </View>

        <View style={s.quickActions}>
          {QUICK_ACTIONS.map((action) => (
            <TouchableOpacity key={action.id} style={s.actionBtn}>
              <View style={s.actionBtnIcon}>
                <Ionicons name={action.icon as any} size={22} color="#2040c8" />
              </View>
              <Text style={s.actionBtnLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={s.filterRow}>
          {FILTER_TABS.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveFilter(tab)}
              style={[
                s.filterTab,
                activeFilter === tab ? s.filterTabActive : s.filterTabInactive,
              ]}
            >
              <Text style={[
                s.filterTabText,
                activeFilter === tab ? s.filterTabTextActive : s.filterTabTextInactive,
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={s.coinList}>
          {coins.map((coin, index) => (
            <TouchableOpacity
              key={coin.id}
              style={[
                s.coinRow,
                index < coins.length - 1 && s.coinRowBorder,
              ]}
            >
              <View style={[s.coinAvatar, { backgroundColor: coin.color }]}>
                <Text style={s.coinAvatarLetter}>{coin.letter}</Text>
              </View>

              <View style={s.coinInfo}>
                <Text style={s.coinName}>{coin.name}</Text>
                <Text style={s.coinSubtitle}>{coin.subtitle}</Text>
              </View>

              <View style={s.coinRight}>
                <View style={s.coinBalance}>
                  <Text style={s.coinBalanceLine}>
                    {showBalance ? coin.balance1 : "* * * * * *"}
                  </Text>
                  <Text style={s.coinBalanceLine}>
                    {showBalance ? coin.balance2 : "* * * * *"}
                  </Text>
                </View>
                <View style={s.coinChevron}>
                  <Ionicons name="chevron-forward" size={14} color="#9ca3af" />
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {coins.length === 0 && (
            <Text style={s.emptyText}>No assets in this category yet.</Text>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0e0e14" },
  scroll: { paddingHorizontal: 20, paddingBottom: 100 },

  pageTitle: { color: "#fff", fontSize: 28, fontWeight: "800", marginTop: 8, marginBottom: 18 },

  portfolioCard: { backgroundColor: "#2040c8", borderRadius: 16, padding: 18, marginBottom: 18 },
  portfolioTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  portfolioLabel: { color: "#fff", fontSize: 15, fontWeight: "600" },
  portfolioBalance: { color: "#fff", fontSize: 22, fontWeight: "700", letterSpacing: 4 },

  quickActions: { flexDirection: "row", justifyContent: "space-between", marginBottom: 22 },
  actionBtn: { flex: 1, alignItems: "center", gap: 8 , },
  actionBtnIcon: { width: 58, height: 58, borderRadius: 16, backgroundColor: "#e8eaeb", alignItems: "center", justifyContent: "center" },
  actionBtnLabel: { color: "#ffff", fontSize: 11, fontWeight: "500" },

  filterRow: { flexDirection: "row", gap: 8, marginBottom: 20 },
  filterTab: { paddingHorizontal: 16, paddingVertical: 7, borderRadius: 20 },
  filterTabActive: { backgroundColor: "#2040c8" },
  filterTabInactive: { backgroundColor: "transparent" },
  filterTabText: { fontSize: 13, fontWeight: "600" },
  filterTabTextActive: { color: "#fff" },
  filterTabTextInactive: { color: "#9ca3af" },

  coinList: {marginTop: 4,},
  coinRow: { flexDirection: "row", alignItems: "center", paddingVertical: 14, gap: 12 },
  coinRowBorder: { borderBottomWidth: 1, borderBottomColor: "#16161f" },
  coinAvatar: { width: 42, height: 42, borderRadius: 21, alignItems: "center", justifyContent: "center" },
  coinAvatarLetter: { color: "#fff", fontSize: 16, fontWeight: "700" },
  coinInfo: { flex: 1 },
  coinName: { color: "#fff", fontSize: 15, fontWeight: "700", marginBottom: 3 },
  coinSubtitle: { color: "#6b7280", fontSize: 12 },
  coinRight: { flexDirection: "row", alignItems: "center", gap: 10 },
  coinBalance: { alignItems: "flex-end", gap: 3 },
  coinBalanceLine: { color: "#9ca3af", fontSize: 12, letterSpacing: 3 },
  coinChevron: { width: 28, height: 28, borderRadius: 14, backgroundColor: "#1e1e2e", alignItems: "center", justifyContent: "center" },
  
  emptyText: { color: "#6b7280", fontSize: 13, textAlign: "center", paddingVertical: 30 },
});