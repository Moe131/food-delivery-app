import React from "react";
import {View, Text, ScrollView} from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function RestaurantDetail(){
     return (
        <View>
            <About />
            <Divider width={1.8} style={{marginVertical: 20}}/>
            <MenuItems/>
        </View>
    );
}