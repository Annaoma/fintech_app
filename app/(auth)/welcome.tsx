import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Logo } from "@/components/xend/logo";
import { PrimaryButton } from "@/components/xend/PrimaryButton";
import { TrustFooter } from "@/components/xend/TrustFooter";
import { XendColors } from "@/constants/xend-theme";
import { SupportChatButton } from "@/components/xend/SupportChatButton";



export default function WelcomeScreen() {
  const router = useRouter(); // lets us navigate to other screens

  return (
    // SafeAreaView keeps content away from notches/status bars
    <SafeAreaView style={styles.container}>

      <View style={styles.top}>
        <SupportChatButton />
      </View>
      <View style={styles.logo}>
        <Logo />
      </View>

      {/* MIDDLE SECTION — Headline + subtitle */}
      <View style={styles.middle}>
        <Text style={styles.headline}>Welcome to the{"\n"}Future of finance</Text>
        <Text style={styles.subtitle}>
          To get started create an account, if you already{"\n"}
          have an account we will log you in
        </Text>
      </View>

      {/* BUTTON SECTION — Auth options */}
      <View style={styles.buttonSection}>
        <PrimaryButton
          label="Continue with Email"
          icon="email"                          // you'll wire this up in PrimaryButton
          onPress={() => router.push("/(auth)/email")}
          variant="blue"                      // solid blue
        />

        <PrimaryButton
          label="Continue with Google"
          icon="google"
          onPress={() => {}}                    // Google OAuth — wire up later
          variant="outline"                     // bordered, dark bg
        />

        <PrimaryButton
          label="Continue with Apple"
          icon="apple"
          onPress={() => {}}                    // Apple Sign In — wire up later
          variant="outline"
        />
      </View>

      {/* FOOTER — Trust signals */}
      <TrustFooter />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: XendColors.background, // dark bg from your theme
    paddingHorizontal: 24,
    justifyContent: "space-between",
    paddingBottom: 32,
  },
  logo: {
    alignItems: "center",
    marginTop: 48,
  },
  middle: {
    alignItems: "center",
    gap: 12,
  },
  headline: {
    fontSize: 28,
    fontWeight: "700",
    color: XendColors.text,
    textAlign: "center",
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 14,
    color: XendColors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  buttonSection: {
    gap: 12,
  },

  top: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});