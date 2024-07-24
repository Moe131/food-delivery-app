import React from "react";
import {View, Text, SafeAreaView} from "react-native"
import LottieView from "lottie-react-native"
import MenuItems from "../components/restaurantDetail/MenuItems";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";


export default function OrderComplete({route, navigation}){

    return (
        <SafeAreaView style={{ flex:1, backgroundColor: "#ffd95c"}}>
            <LottieView 
                style={{width: 100, height:100, alignSelf: "center", marginBottom:10}}
                source={require("../assets/animations/check-mark.json")}
                autoPlay
                speed={0.5}
                loop = {false}
                />
            <Text style={{textAlign: "center", fontSize: 16, fontWeight: 600, marginVertical: 10,paddingHorizontal: 15}}>
                 Your order at {route.params.restaurantName} has been placed for {route.params.totalString}. 
            </Text>
            <MenuItems restaurantName={route.params.restaurantName} foods={route.params.items}  hideCheckbox={true}/>
            <LottieView 
                style={{width: 600, height:200, alignSelf: "center", marginVertical:20}}
                source={require("../assets/animations/cooking.json")}
                autoPlay
                speed={0.5}
                />
            <Divider width={1}/>
            <BottomTabs navigation={navigation} />
        </SafeAreaView>
    )
}