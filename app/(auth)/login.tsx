import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { Ionicons, Feather } from '@expo/vector-icons';
import { PrimaryButton } from '@/components/xend/PrimaryButton';
import { router } from 'expo-router';
import { TrustFooter } from '@/components/xend/TrustFooter';
import { SupportChatButton } from '@/components/xend/SupportChatButton';
import { XendLogo } from '@/components/xend/XendLogo';

export default function LoginScreen() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>

      {/* Chat Button (top right) */}
      <View style={styles.top}>
        <SupportChatButton />
      </View>

      {/* Header */}
      <View >
        <XendLogo />
      </View>

      {/* Welcome */}
      <View style={styles.welcomeRow}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={28} color="#fff" />
        </View>
        <Text style={styles.welcomeText}>Welcome, Michael_Chuks</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Enter your password</Text>
      <Text style={styles.sub}>Your Password</Text>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Feather name="lock" size={16} color="#aaa" />
        <TextInput
          style={styles.input}
          placeholder="Your Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="#aaa" />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Scan Button (UPDATED) */}
      <TouchableOpacity style={styles.scanButton}>
        <Ionicons name="scan-outline" size={30} color="#FF8C00" />
      </TouchableOpacity>

      {/* Login Button */}
      <PrimaryButton
        label="Login"
        onPress={() => router.push("/(tabs)/home")}
        variant="blue"
      />

      {/* Switch Account */}
      <Text style={styles.switchText}>
        Not you? <Text style={styles.switchLink}>Switch account</Text>
      </Text>

      {/* Footer */}
      <View style={styles.footer}>
        <TrustFooter />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 20,
    paddingTop: 60,
  },

  top: {
    position: 'absolute',
    top: 50,
    right: 20,
  },

  header: {
    marginTop: 20,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 6,
  },

  welcomeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252323',
    marginRight: 10,
  },

  welcomeText: {
    color: '#fff',
    fontSize: 16,
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  
  },
  sub: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },

  input: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
  },

  forgot: {
    color: '#aaa',
    alignSelf: 'flex-end',
    marginTop: 10,
  },

  /* ✅ UPDATED SCAN BUTTON */
  scanButton: {
    alignSelf: 'center',
    marginVertical: 25,
    width: 50,
    height: 50,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#FF8C00',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  switchText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 20,
  },

  switchLink: {
    color: '#FFA500',
  },

  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
});