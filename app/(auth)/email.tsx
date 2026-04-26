import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { PrimaryButton } from '@/components/xend/PrimaryButton'
import { router } from 'expo-router'
import { TrustFooter } from '@/components/xend/TrustFooter'
import { SupportChatButton } from '@/components/xend/SupportChatButton'
import { MaterialCommunityIcons, MaterialIcons, } from '@expo/vector-icons'

const Email = () => {
  return (
    <View style={styles.container}>

      {/* Chat Button */}
      <View style={styles.top}>
        <SupportChatButton />
      </View>

      {/* Main Content */}
      <View style={styles.middle}>

        <Text style={styles.title}>Welcome</Text>

        <Text style={styles.subtitle}>
          Enter your email address
        </Text>

        <Text style={styles.label}>Email</Text>
      <View>
        <TextInput 
          placeholder="✉️ Enter your Email"
          placeholderTextColor="#888"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          
        />
      </View>

        <PrimaryButton  
          label="Continue "
          onPress={() => router.push("/(auth)/login")}
          variant="navy"
        />

        <TrustFooter />

      </View>

    </View>
  )
}

export default Email

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    padding: 20,
  },

  top: {
    position: 'absolute',
    top: 60,
    right: 18,
  },

  middle: {
    marginTop: 80,     // pushes everything slightly down from top
    gap: 14,           // controls spacing between ALL items
  },

  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    
  },

  subtitle: {
    color: '#fffefe',
    fontSize: 16,
    
  },

  label: {
    color: '#aaa',
  },

  input: {
    backgroundColor: '#111',
    color: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#222',
  },
});