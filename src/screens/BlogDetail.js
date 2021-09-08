import React from 'react'
import { StyleSheet, Text, View,Image, Dimensions } from 'react-native'

const BlogDetail = ({ route, navigation }) => {
    const { width, height } = Dimensions.get("screen");
    const { item } = route.params;
    return (
        <View style={styles.container}>
           <Image
                  source={{ uri: item.image }}
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
                <View>
                    <Text>{item.title}</Text>
                </View>

                
                
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
