import React from "react";
import {View, Text, Image} from "react-native";


export default function About(props){
    const yelpRestaurant = props.route.params;
    const categories = yelpRestaurant.categories.map( (cat) => cat.title ).join(" • ") 
    const description = categories + " • " 
        + (yelpRestaurant.price ? yelpRestaurant.price + " • " : " " )
        + " " + yelpRestaurant.rating
        +  " ⭐ (" + yelpRestaurant.reviews + ")" ;
    
        return (
        <View >
            <RestaurantImage image={yelpRestaurant.image}/>
            <RestaurantTitle title={yelpRestaurant.name}/>
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
