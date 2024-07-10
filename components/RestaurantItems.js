import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Categories from "./Categories";

const localRestaurants = [
    {
        name: "Benihana",
        image_url: "https://mamalikestocook.com/wp-content/uploads/2016/08/20160804_131027.jpg",
        categories: ["Cafe", "Bae"],
        price: "$$",
        reviews : 1244,
        rating: 4.5
    },
    {
        name: "Irvine Grill",
        image_url: "https://mamalikestocook.com/wp-content/uploads/2016/08/20160804_131027.jpg",
        categories: ["Persian", "Bae"],
        price: "$$",
        reviews : 432,
        rating: 4.1
    }
]

export default function RestaurantItems(){
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 10}}>
            {localRestaurants.map( (restaurant, index) => (
                <View key={index} style={{ marginTop: 10, padding:15, backgroundColor:"white"}}>
                    <RestaurantImage image_url={restaurant.image_url}/>
                    <RestaurantInfo  name= {restaurant.name} 
                                    categories={restaurant.categories} 
                                    price={restaurant.price}
                                    reviews={restaurant.reviews}
                                    rating={restaurant.rating}
                    />
                </View>
            )
        )}
        </TouchableOpacity>
    );
}

const RestaurantImage = (props) => (
    <>
        <Image 
            source={{
                uri : props.image_url
            }} 
            style={{width: "100%", height: 180}}
        />
        <TouchableOpacity style={{position:"absolute", right: 20, top: 20}}>
            <MaterialCommunityIcons name="heart-outline" size={25} color={"white"} ></MaterialCommunityIcons>
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View 
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10
        }}
    >
        <View >
            <Text style={{ fontSize: 15, fontWeight:"bold" }}> {props.name}</Text>
            <Text style={{ fontSize: 13, color:"gray" }}> 30-45 minutaes wait</Text>
        </View>
        <View 
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 15
            }}
        >
            <Text>{props.rating}</Text>
        </View>
    </View>
);