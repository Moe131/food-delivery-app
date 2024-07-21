import React from "react";
import {View, Text, SafeAreaView} from "react-native"
import LottieView from "lottie-react-native"
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderComplete({route, navigation}){

    return (
        <SafeAreaView style={{ flex:1, backgroundColor: "white"}}>
            <LottieView 
                style={{width: 100, height:100, alignSelf: "center", marginBottom:30}}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop = {false}
                />
            <Text style={{textAlign: "center", fontSize: 16, fontWeight: 600, paddingHorizontal: 15}}>
                 Your order at {route.params.restaurantName} has been placed for {route.params.totalString}. 
            </Text>
            <MenuItems restaurantName={route.params.restaurantName} foods={route.params.items}  hideCheckbox={true}/>
            <LottieView 
                style={{width: 400, height:200, alignSelf: "center", marginBottom:100}}
                source={require("../assets/animations/cooking.json")}
                autoPlay
                speed={0.5}
                />
        </SafeAreaView>
    )
}