import React from "react";
import {View, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems ,{localRestaurants} from "../components/RestaurantItems";

const YELP_API_KEY = process.env.EXPO_PUBLIC_YELP_API_KEY

export default function Home(){
    const [restaurantsData, setRestaurantsData] = React.useState(localRestaurants)

    React.useEffect(()=> {
        fetchRestaurants();
    }, []);

    async function fetchRestaurants() {
        const url = "https://api.yelp.com/v3/businesses/search?location=Irvine&sort_by=best_match";
        const options = {
            method : "GET",
            headers: {
                Authorization : "Bearer "+ YELP_API_KEY ,
            },
        };
        await fetch( url, options)
        .then((res)=> res.json())
        .then( (json) =>  setRestaurantsData(json.businesses))
        .catch( (e)=> console.log(e))
    }

     return (
        <SafeAreaView style= {{backgroundColor: "#eee", flex: 1}}>
            <View style={{backgroundColor:"white", padding: 15}}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView vertical>
                <Categories/>
                <RestaurantItems restaurantsData={restaurantsData}/> 
            </ScrollView>
        </SafeAreaView>
    );
}