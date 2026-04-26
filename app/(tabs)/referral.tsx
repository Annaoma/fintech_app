import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { SupportChatButton } from "@/components/xend/SupportChatButton";

export default function ReferralScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
      >
        <View style = {styles.top}>
          <SupportChatButton/>
        </View>

        {/* Title */}
        <Text style={styles.title}>Referral</Text>

        <Text style={styles.subtitle}>
          Share your code and earn rewards with every{"\n"}
          friend who joins.
        </Text>

        {/* Rewards Card */}
        <View style={styles.rewardCard}>
          <View style={styles.rewardIconBox}>
            <Feather name="gift" size={24} color="#2040C8" />
          </View>

          <View style={styles.rewardTextBox}>
            <Text style={styles.rewardTitle}>Rewards</Text>
            <Text style={styles.rewardSubtitle}>
              Let's grow together — refer your' friends{"\n"}
              and family with your referral code.
            </Text>
          </View>
        </View>

        {/* Referral Code Card */}
        <View style={styles.codeCard}>
          <Text style={styles.codeLabel}>Your referral code</Text>

          <Text style={styles.codeValue}>XEND-ANNA</Text>

          <TouchableOpacity style={styles.copyRow}>
            <MaterialIcons
              name="content-copy"
              size={16}
              color="#2D4BE0"
            />
            <Text style={styles.copyText}>Copy code</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Referrals</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        {/* Share Button */}
        <TouchableOpacity style={styles.shareBtn}>
          <Text style={styles.shareBtnText}>Share invite link</Text>
        </TouchableOpacity>
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070707",
  },

  scroll: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 120,
    
  },
 top: {
    position: 'absolute',
    top: 50,
    right: 18,
  },

  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "700",
    marginTop: 6,
  },

  subtitle: {
    color: "#A3A3A3",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 22,
  },

  rewardCard: {
    backgroundColor: "#2847D8",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  rewardIconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  rewardTextBox: {
    flex: 1,
  },

  rewardTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 4,
  },

  rewardSubtitle: {
    color: "#E5E7FF",
    fontSize: 13,
    lineHeight: 20,
  },

  codeCard: {
    backgroundColor: "#2c2d2e",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#232323",
    marginBottom: 16,
  },

  codeLabel: {
    color: "#A1A1A1",
    fontSize: 10,
    marginBottom: 10,
  },

  codeValue: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 12,
  },

  copyRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  copyText: {
    color: "#2D4BE0",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  statCard: {
    width: "48%",
    backgroundColor: "#393a3b",
    borderRadius: 14,
    paddingVertical: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#232323",
  },

  statNumber: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "700",
  },

  statLabel: {
    color: "#B3B3B3",
    fontSize: 13,
    marginTop: 4,
  },

  shareBtn: {
    backgroundColor: "#2847D8",
    borderRadius: 18,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
  },

  shareBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  bottomTab: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#111111",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#1F1F1F",
  },

  tabItem: {
    alignItems: "center",
    gap: 4,
  },

  tabText: {
    color: "#8A8A8A",
    fontSize: 11,
  },

  activeTab: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#2847D8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -28,
    borderWidth: 3,
    borderColor: "#FF8C00",
  },

  activeTabText: {
    color: "#FFFFFF",
    fontSize: 11,
    marginTop: 2,
  },
});