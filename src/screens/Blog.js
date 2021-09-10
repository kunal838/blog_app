import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import Crads from "../components/Crads";
import SmallCards from "../components/SmallCards";
const Blog = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{
          backgroundColor:"#222831",
          flex:1,
          
          
          
          width:"100%" ,
          alignItems:"flex-start",
          justifyContent:"flex-end",
          
      }}>
          <View style={{
            margin: 10,
            
          }}>
          <AntDesign onPress={()=>navigation.navigate('Home')} style={{
              
          }} name="arrowleft" size={24} color="white" />
          </View>

        <Text style={{
            
            margin:30,
            color: "#fff",
            fontSize:30,
            fontWeight:"bold"
        }}>Blog</Text>
        {/* next */}
      </View>
      <View style={{
          flex: 4,
          backgroundColor:"#fff",
          borderRadius:20,
          position: "relative",
          bottom: 15,
          
      }}>
        <ScrollView>
        <Text
        style={{
            marginLeft: 10,
            fontWeight:"bold",
            fontSize:20,
            color: "#393E46",
        }}
        >Popular Articles</Text>
          
        <Crads navigation={navigation}/>

        <Text
        style={{
            margin: 10,
            fontWeight:"bold",
            fontSize:30,
        }}
        >New Added</Text>
        <SmallCards  navigation={navigation}/>

       
        </ScrollView>
      </View>
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius:60,
    
  },
});
