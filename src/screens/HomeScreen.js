import React from 'react';
import {
    StyleSheet,
    
    Text,
    View,
    
    TouchableOpacity,
  } from "react-native";
  import LottieView from "lottie-react-native";
import { StatusBar } from 'expo-status-bar';
export default function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 2,

            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            borderBottomEndRadius: 100,
            borderBottomLeftRadius: 100,
          }}
        >
          <LottieView
            style={{
              width: 300,
              height: 300,
              backgroundColor: "#fff",
            }}
            source={require("../../assets/animation.json")}
            autoPlay
            loop
          />
        </View>
        {/*  <LottieView
          
          style={{
            width: 300,
            height: 300,
            backgroundColor: '#fff',
          }}
          source={require('./assets/animation.json')}
         autoPlay
         loop
        /> */}
        <View
          style={{
            flex: 1,
            position: "relative",
            bottom: 80,

            width: "100%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "#000",
              }}
            >
              You are in
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              exactly the
            </Text>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              right place
            </Text>
          </View>
          <TouchableOpacity
          onPress={()=>navigation.navigate("Blog")}
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 25,
                backgroundColor: "#121212",
                height: 50,
                width: 100,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "900",
                }}
              >
                Read blog
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <StatusBar hidden />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#4affc3",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  