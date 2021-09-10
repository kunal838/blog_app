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
            backgroundColor: "#fff",
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
          

            width: "100%",
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginTop: 10,
            }}
          >
           
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
                backgroundColor: "#FF4C29",
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
      backgroundColor: "#082032",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  