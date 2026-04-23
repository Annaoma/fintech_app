import { useState } from "react";
import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity, SafeAreaView
} from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { SupportChatButton } from "@/components/xend/SupportChatButton";

const QUICK_ACTIONS = [
  { id: "bank", label: "To Bank", badge: "NEW" },
  { id: "withdraw", label: "Withdraw", badge: null },
  { id: "save", label: "Save", badge: null },
  { id: "invest", label: "Invest", badge: null },
  { id: "yield", label: "High Yield", badge: "DOT" },
  { id: "swap", label: "Swap", badge: null },
];

const TODO_ITEMS = [
  "Update your profile.",
  "Verify your Phone Number",
  "Complete KYC/Identity Check",
];

function ActionIcon({ id }: { id: string }) {
  const props = { size: 22, color: "#2040c8" };

  switch (id) {
    case "bank": return <FontAwesome5 name="university" {...props} />;
    case "withdraw": return <Ionicons name="arrow-down-circle-outline" {...props} />;
    case "save": return <MaterialCommunityIcons name="piggy-bank-outline" {...props} />;
    case "invest": return <Ionicons name="trending-up-outline" {...props} />;
    case "yield": return <Ionicons name="pulse-outline" {...props} />;
    case "swap": return <Ionicons name="swap-vertical-outline" {...props} />;
    default: return null;
  }
}

export default function HomeScreen() {
  const [showBalance, setShowBalance] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);

  const toggleTodo = (i: number) => {
    if (checked.includes(i)) {
      setChecked(checked.filter(x => x !== i));
    } else {
      setChecked([...checked, i]);
    }
  };

  return (
    <SafeAreaView style={s.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>

        <View style={s.header}>
          <View style={s.headerLeft}>
            <View style={s.avatar}>
              <Ionicons name="person" size={24} color="#6b7280" />
            </View>
            <View>
              <Text style={s.greeting}>Hi, @Anna_Chris</Text>
              <Text style={s.subGreeting}>Start saving now</Text>
            </View>
          </View>
          <SupportChatButton />
        </View>

        <View style={s.balanceCard}>
          <View style={s.balanceCardHeader}>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", gap: 6 }}></TouchableOpacity>
            <Text style={s.balanceLabel}>PORTFOLIO BALANCE</Text>
            <Text style={s.txText}>Transaction History</Text>
            <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
              <Ionicons
                name={showBalance ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#fff"
                
              />
            </TouchableOpacity>
          </View>

          <Text style={s.hiddenBalance}>
            {showBalance ? "$1,234,567" : "* * * * * * * *"}
          </Text>

          <View style={s.savingsCard}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <View style={s.savingsIcon}>
                <MaterialIcons name="savings" size={20} color="#2040c8" />
              </View>
              <View>
                <Text style={s.savingsTitle}>Total Savings</Text>
                <Text style={s.savingsAmount}>
                  {showBalance ? "₦300,000" : "* * * * * *"}
                </Text>
              </View>
            </View>

            <TouchableOpacity style={s.plansBtn}>
              <Text style={s.plansBtnText}>Plans</Text>
              <Ionicons name="chevron-forward" size={13} color="#2040c8" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={s.sectionTitle}>QUICK ACTIONS</Text>

        <View style={s.actionsGrid}>
          {QUICK_ACTIONS.map((action) => (
            <TouchableOpacity key={action.id} style={s.actionItem}>

              {action.badge === "NEW" && (
                <View style={s.badgeNew}>
                  <Text style={s.badgeNewText}>NEW</Text>
                </View>
              )}

              {action.badge === "DOT" && (
                <Text style={s.badgeFire}>🔥</Text>
              )}

              <View style={s.actionBox}>
                <ActionIcon id={action.id} />
              </View>

              <Text style={s.actionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={s.sectionTitle}>TO DO</Text>

        <View style={s.todoList}>
          {TODO_ITEMS.map((item, i) => {
            const active = checked.includes(i);
            return (
              <TouchableOpacity key={i} style={s.todoItem} onPress={() => toggleTodo(i)}>
                <View style={[s.checkbox, active && s.checkboxActive]} />
                <Text style={s.todoText}>{item}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0e0e14" },
  scroll: { paddingHorizontal: 16, paddingBottom: 100 },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 18
  },

  headerLeft: { flexDirection: "row", alignItems: "center", gap: 10 },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2e2e33",
    borderWidth: 1.5,
    borderColor: "#3535ca",
    alignItems: "center",
    justifyContent: "center"
  },

  greeting: { color: "#fff", fontSize: 22, fontWeight: "700" },
  subGreeting: { color: "#6b7280", fontSize: 14 },

  balanceCard: {
    backgroundColor: "#2040c8",
    borderRadius: 18,
    padding: 20,
    marginBottom: 22,
    marginHorizontal: -4
  },

  balanceCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  balanceLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  },

  hiddenBalance: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 10
  },

  savingsIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  savingsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  txText: {
  color: "#fff",
  fontSize: 12
},

  savingsTitle: { color: "#111", fontSize: 16, fontWeight: "600" },
  savingsAmount: { color: "#2040c8", fontSize: 20},

  plansBtn: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#2040c8",
    borderWidth: 1.5,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5
  },

  plansBtnText: { color: "#2040c8", fontSize: 14},

  sectionTitle: {
    color: "#6b7280",
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 14
  },

  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28
  },

  actionItem: {
    width: "30%",
    alignItems: "center",
    position: "relative",
    marginBottom: 14
  },

  actionBox: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  actionLabel: { color: "#9ca3af", fontSize: 11, marginTop: 6 },

  badgeNew: {
    position: "absolute",
    top: -6,
    right: 4,
    backgroundColor: "#ef4444",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    zIndex: 10
  },

  badgeNewText: { color: "#fff", fontSize: 10 },

  badgeFire: {
    position: "absolute",
    top: -10,
    right: 7,
    fontSize: 24,
    zIndex: 10
  },

  todoList: { gap: 10 },

  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#16161f",
    padding: 16,
    borderRadius: 12
  },

  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: "#2040c8",
    borderRadius: 5
  },

  checkboxActive: {
    backgroundColor: "#2040c8"
  },

  todoText: { color: "#e5e7eb", fontSize: 14 }
});