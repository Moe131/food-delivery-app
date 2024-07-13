import React from "react";
import {View, Text, Image} from "react-native";


const image = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/16/b6/e1/xix-private-dining-room.jpg?w=600&h=-1&s=1"
const title = "Urban Plates"
const description = "American * Comfort Food * $$ * 4.2 (2953+)"

export default function About(){
    return (
        <View >
            <RestaurantImage image={image}/>
            <RestaurantTitle title={title}/>
            <RestaurantDescription description={description}/>
        </View>
    );
} 

function RestaurantImage(props){
    return(
        <Image 
            source={{uri: props.image}} 
            style={{
                width: "100%",
                height: 180
            }} />
    )
}

function RestaurantTitle(props){
    return(
        <Text
            style={{
                fontSize: 29,
                fontWeight: "600",
                marginTop: 10,
                marginHorizontal: 15
            }}
        >
            {props.title}
        </Text>
    )
}

function RestaurantDescription(props){
    return(
        <Text
            style={{
                fontSize: 15,
                fontWeight: "400",
                marginTop: 10,
                marginHorizontal: 15
            }}
        >
            {props.description}
        </Text>
    )
}
