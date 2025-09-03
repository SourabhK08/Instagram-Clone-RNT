import { COLORS } from "@/constants/theme";
import { useSSO } from "@clerk/clerk-expo";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Login = () => {
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
      });

      if (setActive && createdSessionId) {
        setActive({ session: createdSessionId });
        console.log("====================================");
        console.log(createdSessionId);
        console.log("====================================");
        router.replace("/(tabs)");
      }
    } catch (error) {
      console.error("OAuth error:", JSON.stringify(error, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="logo-instagram"
        size={70}
        color={COLORS.primary}
        style={styles.logo}
      />

      <Text style={styles.heading}>Instagram </Text>

      <View style={styles.loginSection}>
        <TouchableOpacity
          style={styles.googleButton}
          activeOpacity={0.9}
          onPress={handleGoogleSignIn}
        >
          <Ionicons
            name="logo-google"
            size={20}
            color={COLORS.surface}
            style={styles.logo}
          />

          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerSection}>
        <Text style={styles.footerText}>
          By continuing, you agree to our Terms & Privacy Policy.
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {},
  heading: {
    color: COLORS.white,
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
  },
  loginSection: {
    marginTop: 40,
  },
  googleButton: {
    flexDirection: "row",
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  googleButtonText: {
    fontWeight: "bold",
    marginLeft: 8,
  },
  footerSection: {
    position: "absolute",
    bottom: 25,
    width: "100%",
    alignItems: "center",
    marginLeft: 10,
  },
  footerText: {
    color: COLORS.grey,
    fontSize: 10,
    marginTop: 10,
  },
});
