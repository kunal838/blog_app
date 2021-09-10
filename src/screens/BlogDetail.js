import React from 'react'
import { StyleSheet, Text, View,Image, Dimensions, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
const BlogDetail = ({ route, navigation }) => {
    const { width, height } = Dimensions.get("screen");
    const { item } = route.params;
    return (
        <View style={styles.container}>
           <Image
                  source={{ uri: item.url }}
                  style={{
                    width,
                    height: 250,
                    resizeMode: "cover",
                   
                   
                  }}
                />
                
                <View style={{
                    backgroundColor: "white",
                    height: 35,
                    position: "relative",
                    bottom: 20,
                    borderTopRightRadius:20 ,
                    borderTopLeftRadius:20 ,
                }}/>
               
                <AntDesign onPress={()=>navigation.navigate("Blog")} name="caretleft" size={24} color="black" />
                <ScrollView>
                <View style={{
                    padding: 10
                }}>
                    <Text style={{
                        
                        fontSize:30,
                        textAlign:"center",
                        fontWeight:"900"
                    }}>{item.title}</Text>

                    <Text
                    style={{
                        marginTop:25 ,
                        fontSize:15,
                        fontWeight:"300",
                        textAlign:"center",
                        lineHeight:27,
                        
                    }}
                    >{item.description}</Text>
                </View>
                </ScrollView>
                
                
        </View>
    )
}

export default BlogDetail

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex: 1,
    }
})
