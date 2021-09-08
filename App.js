import { NavigationContainer } from "@react-navigation/native";
/* import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react"; */
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Animated,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
/* import LottieView from "lottie-react-native"; */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blog from "./src/screens/Blog";
import BlogDetail from "./src/screens/BlogDetail";
export default function App() {
 

  const Stack = createNativeStackNavigator();

  return (
  
    
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Detail" component={BlogDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebe6ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
