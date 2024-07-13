import React from "react";
import {View, Text, ScrollView} from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements/dist/divider/Divider";

export default function RestaurantDetail(){
     return (
        <View>
            <About />
            <Divider width={1}/>
        </View>
    );
}