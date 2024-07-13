import React from "react";
import {View, Text, Image} from "react-native";

const yelpRestaurant = {
    name : "Urban Plates",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/16/b6/e1/xix-private-dining-room.jpg?w=600&h=-1&s=1",
    price: "$$",
    rating : 4.5,
    reviews : "1500",
    categories : [{title : "Thai"}, {title: "Comfort food"}]
}

const categories = yelpRestaurant.categories.map( (cat) => cat.title ).join(" • ") 
const description = categories + " • " 
+ (yelpRestaurant.price ? yelpRestaurant.price + " • " : " " )
+ " " + yelpRestaurant.rating
+  " ⭐ (" + yelpRestaurant.reviews + ")" ;

export default function About(){
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
