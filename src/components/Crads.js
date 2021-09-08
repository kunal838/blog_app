import * as React from "react";
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const data = [
 {image: "https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200",title:"title1"},
  {image:"https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",title:"title2"},
  {image:"https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200",title:"title3"},
  {image:"https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200",title:"title4"},
  {image:"https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200",title:"title5"},
  {image:"https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200",title:"title6"},
  {image:"https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200",title:"title7"},
];

const imageW = width * 0.7;
const imageH = imageW * 1.2;

export default ({navigation}) => {
  const xScroll = React.useRef(new Animated.Value(0)).current;
  return (
    
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Animated.FlatList
        data={data}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xScroll } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item,index }) => {
          const inputRange = [
            (index - 1) * 260,
            index * 260,
            (index + 1) * 260
          ];

          const opacity = xScroll.interpolate({
            inputRange,
            outputRange: [.6, 1, .6]
          })

          const scale = xScroll.interpolate({
            inputRange,
            outputRange: [.7, 1, .1]
          })
          return (
            <TouchableOpacity onPress={()=>navigation.navigate("Detail", {
                item:item
              })} >
              <Animated.View
                style={[{
                    margin: 10,
                  alignItems: "flex-start",
                  justifyContent: "center",
                },{
                   opacity,
                   transform: [{scale}]
                   
                }]}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 230,
                    height: 280,
                    resizeMode: "cover",
                    margin: 10,
                    borderRadius: 25,
                  }}
                />
                <Text style={{
                    position: "absolute",
                    bottom:80,
                    left:30 ,
                    fontSize:36,
                    fontWeight:"800",
                    color: "#fff",
                }}>{item.title}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
      <StatusBar hidden />
    </View>
    
  );
};
