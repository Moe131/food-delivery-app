import React from "react";
import {View, Text, ScrollView} from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

export default function RestaurantDetail({route, navigation}){
     return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical: 20}}/>
            <MenuItems restaurantName={route.params.name}/>
            <ViewCart navigation={navigation}/>
        </View>
    );
}