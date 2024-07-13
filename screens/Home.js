import React from "react";
import {View, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import RestaurantItems ,{localRestaurants} from "../components/home/RestaurantItems";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";


const YELP_API_KEY = process.env.EXPO_PUBLIC_YELP_API_KEY

export default function Home(){
    const [restaurantsData, setRestaurantsData] = React.useState(localRestaurants)
    const [city, setCity] = React.useState("Irvine");
    const [activeTab, setActiveTab] = React.useState("Delivery");

    React.useEffect(()=> {
        fetchRestaurants();
    }, [city, activeTab]);

    async function fetchRestaurants() {
        const url = "https://api.yelp.com/v3/businesses/search?location="+ city +"&sort_by=best_match";
        const options = {
            method : "GET",
            headers: {
                Authorization : "Bearer "+ YELP_API_KEY ,
            },
        };
        await fetch( url, options)
        .then((res)=> res.json())
        .then( (json) =>  setRestaurantsData(
            json.businesses.filter( (business) =>
                business.transactions.includes(activeTab.toLocaleLowerCase()))
            ))
        .catch( (e)=> console.log(e))
    }

     return (
        <SafeAreaView style= {{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
                <HeaderTabs activeTab={activeTab} setActiveTab={(tab) =>setActiveTab(tab)} />
                <SearchBar cityHandler={(newCity) => setCity(newCity)} />
            </View>
            <ScrollView vertical>
                <Categories/>
                <RestaurantItems restaurantsData={restaurantsData}/> 
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs />
        </SafeAreaView>
    );
}