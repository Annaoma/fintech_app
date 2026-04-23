import { View, Image, StyleSheet } from "react-native";

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/Logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    
  },

  logo: {
    width: 120,
    height: 120,
    marginTop: 40
  },
});