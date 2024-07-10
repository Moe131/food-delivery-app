import React from "react";
import {View, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";

export default function Home(){
    return (
        <SafeAreaView style= {{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView vertical>
                <Categories/>
                <RestaurantItem/>
                <RestaurantItem/>
                <RestaurantItem/>

            </ScrollView>
        </SafeAreaView>
    );
}