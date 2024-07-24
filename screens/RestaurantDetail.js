import React from "react";
import {View, Text, ScrollView} from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
import BottomTabs from "../components/home/BottomTabs";

const foods = [
    {
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish",
        price: "$18.49",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
    },
    {
        title: "Sushi Platter",
        description: "Assorted sushi with fresh fish",
        price: "$30.00",
        image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
    },
    {
        title: "Beef Tacos",
        description: "Mexican beef tacos with salsa",
        price: "$14.99",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
        title: "Caesar Salad",
        description: "Fresh salad with Caesar dressing",
        price: "$12.00",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        title: "Margherita Pizza",
        description: "Classic pizza with tomatoes and cheese",
        price: "$20.00",
        image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg"
    },
    {
        title: "Chocolate Cake",
        description: "Rich chocolate cake with frosting",
        price: "$8.00",
        image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg"
    },
    {
        title: "Pad Thai",
        description: "Thai stir-fried noodles with shrimp",
        price: "$17.49",
        image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg"
    }
];



export default function RestaurantDetail({route, navigation}){
     return (
        <View style= {{backgroundColor: "#ffd95c", flex: 1, paddingBottom: 32}}>
            <About route={route}/>
            <Divider width={1.8} style={{marginTop: 20}}/>
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation}/>
            <BottomTabs navigation={navigation} />
        </View>
    );
}