
import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { XendColors } from "@/constants/xend-theme";


type IconProps = { focused: boolean; color: string; size: number };

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,           // we build our own headers per screen
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: XendColors.primaryBlue,   // blue when active
        tabBarInactiveTintColor: XendColors.textMuted, // grey when inactive
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      {/* Each <Tabs.Screen> = one tab in the bar */}

      <Tabs.Screen
        name="home"                  // maps to app/tabs/index.tsx (Home)
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }: IconProps) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"                 // maps to app/tabs/wallet.tsx
        options={{
          title: "Wallet",
          tabBarIcon: ({ focused, color, size }: IconProps) => (
            <Ionicons
              name={focused ? "card" : "card-outline"}
              size={size}
              color={color}

            />
          ),
           
        }}
      />
      <Tabs.Screen
        name="referral"              // maps to app/tabs/referral.tsx
        options={{
          title: "Referral",
          tabBarIcon: ({ focused }: IconProps) => (
            <View style={styles.referralIcon}>
              <MaterialIcons name="group" size={26} color="#fff" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="plans"                 // maps to app/tabs/plans.tsx
        options={{
          title: "Plans",
          tabBarIcon: ({ focused, color, size }: IconProps) => (
            <MaterialCommunityIcons
              name={focused ? "piggy-bank" : "piggy-bank-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="more"                  // maps to app/tabs/more.tsx
        options={{
          title: "More",
          tabBarIcon: ({ focused, color, size }: IconProps) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: XendColors.background,  // dark card color
    borderTopWidth: 0,                          // remove default border line
    height: 70,
    paddingBottom: 10,
    paddingTop: 8,
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "500",
  },
  // The Referral icon is a raised blue bubble sitting above the tab bar
  referralIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: XendColors.referralRing,
    borderWidth: 2,
    shadowColor: XendColors.referralRing,
    backgroundColor: XendColors.primaryBlue,  // blue
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,                          
    elevation: 8, 
                                 // Android shadow
  },
});