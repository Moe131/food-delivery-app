import React from "react";
import {View, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems from "../components/RestaurantItems";

export default function Home(){
    return (
        <SafeAreaView style= {{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView vertical>
                <Categories/>
                <RestaurantItems/>
            </ScrollView>
        </SafeAreaView>
    );
}