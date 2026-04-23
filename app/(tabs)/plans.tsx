import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity, SafeAreaView
} from "react-native";
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function PlansScreen() {
  return (
    <SafeAreaView style={s.container}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={s.scroll}>

        
        <Text style={s.pageTitle}>Plans</Text>

        
        <View style={s.savingsPlanCard}>
          <Text style={s.savingsPlanLabel}>SAVINGS PLAN</Text>
          <Text style={s.savingsPlanAmount}>USD 0.00</Text>
        </View>

       
        <View style={s.actionRow}>

          {/* Create Plan */}
          <TouchableOpacity style={[s.actionCard, s.actionCardOrange]}>
            <View style={[s.actionCardIcon, { backgroundColor: "#fff3e8" }]}>
              <MaterialCommunityIcons name="piggy-bank-outline" size={22} color="#f97316" />
            </View>
            <Text style={[s.actionCardTitle, { color: "#f97316" }]}>Create Plan</Text>
            <Text style={s.actionCardsub}>Create a new fixed savings plan</Text>
          </TouchableOpacity>

          {/* Interest Calculator */}
          <TouchableOpacity style={[s.actionCard, s.actionCardBlue]}>
            <View style={[s.actionCardIcon, { backgroundColor: "#eef2ff" }]}>
              <MaterialIcons name="calculate" size={22} color="#2040c8" />
            </View>
            <Text style={[s.actionCardTitle, { color: "#fff" }]}>Interest{"\n"}Calculator</Text>
            <Text style={s.actionCardsub}>Calculate the interest on your savings</Text>
          </TouchableOpacity>

        </View>

        
        <Text style={s.sectionTitle}>ALL SAVINGS PLANS</Text>
        <View style={s.savingsRow}>

          {/* Flexible Savings */}
          <View style={s.miniCard}>
            <Text style={s.miniCardLabel}>FLEXIBLE SAVINGS</Text>
            <Text style={s.miniCardAmount}>$0.00</Text>
            <TouchableOpacity style={s.miniCardBtn}>
              <View style={{ width: 30, height: 30, borderRadius: 14, backgroundColor: "#2040c8", alignItems: "center", justifyContent: "center" }}>   
               <Ionicons name="add" size={14} color="#fdfdfd" />
              </View>
              <Text style={s.miniCardBtnText}>ADD FUNDS</Text>
            </TouchableOpacity>
          </View>

          {/* Fixed Savings */}
          <View style={s.miniCard}>
            <Text style={s.miniCardLabel}>FIXED SAVINGS</Text>
            <Text style={s.miniCardAmount}>$0.00</Text>
            <TouchableOpacity style={s.miniCardBtn}>
              <View style={{ width: 30, height: 30, borderRadius: 14, backgroundColor: "#2040c8", alignItems: "center", justifyContent: "center" }}> 
               <MaterialIcons name="format-list-bulleted" size={16} color="#fbfbfd" />
              </View>
              <Text style={s.miniCardBtnText}>VIEW ALL PLANS</Text>
            </TouchableOpacity>
          </View>

        </View>

        
        <Text style={s.sectionTitle}>TODAY'S RATE</Text>
        <Text style={s.rateText}>
          This rate is updated daily (Apr 13, 2026 02:43 AM)
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container:          { flex: 1, backgroundColor: "#0e0e14" },
  scroll:             { paddingHorizontal: 20, paddingBottom: 100 },

  // Title
  pageTitle:          { color: "#fff", fontSize: 28, fontWeight: "800",
                        marginTop: 8, marginBottom: 20, letterSpacing: -0.3 },

  // Blue savings card
  savingsPlanCard:    { backgroundColor: "#2040c8", borderRadius: 16,
                        padding: 20, marginBottom: 16 },
  savingsPlanLabel:   { color: "rgba(255,255,255,0.75)", fontSize: 10,
                        fontWeight: "700", letterSpacing: 1.2, marginBottom: 8 },
  savingsPlanAmount:  { color: "#fff", fontSize: 32, fontWeight: "800",
                        letterSpacing: -0.5 },

  // Action cards row
  actionRow:          { flexDirection: "row", gap: 12, marginBottom: 22 },
  actionCard:         { flex: 1, backgroundColor: "#101013",
                        borderRadius: 14, padding: 16 },
  actionCardOrange:   { borderWidth: 1.5, borderColor: "#f97316" },
  actionCardBlue:     { borderWidth: 1.5, borderColor: "#2040c8" },
  actionCardIcon:     { width: 40, height: 40, borderRadius: 10,
                        alignItems: "center", justifyContent: "center",
                        marginBottom: 12 },
  actionCardTitle:    { fontSize: 14, fontWeight: "700",
                        marginBottom: 5, lineHeight: 20 },
  actionCardsub:     { color: "#dfe3eb", fontSize: 11, lineHeight: 16 },

  // Section title
  sectionTitle:       { color: "#6b7280", fontSize: 10, fontWeight: "700",
                        letterSpacing: 1.4, marginBottom: 12 },

  // Savings plan cards
  savingsRow:         { flexDirection: "row", gap: 12, marginBottom: 24 },
  miniCard:           { flex: 1, backgroundColor: "#13131a", borderRadius: 14, padding: 16 },
  miniCardLabel:      { color: "#dee0e2", fontSize: 9, fontWeight: "700",
                        letterSpacing: 1.2, marginBottom: 8 },
  miniCardAmount:     { color: "#fff", fontSize: 22, fontWeight: "700",
                        marginBottom: 16 },
  miniCardBtn:        { flexDirection: "row", alignItems: "center",
                        justifyContent: "center", gap: 5,
                        
                        borderRadius: 8, paddingVertical: 9 },
  miniCardBtnText:    { color: "#eaecf5", fontSize: 11, fontWeight: "800",
                        letterSpacing: 0.3 },

  // Rate
  rateText:           { color: "#cdd1da", fontSize: 12, lineHeight: 20 },
});