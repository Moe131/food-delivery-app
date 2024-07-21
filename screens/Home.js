import React from "react";
import {View, SafeAreaView, ScrollView, ActivityIndicator} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import Restaurants from "../components/home/Restaurans";
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";


const YELP_API_KEY = process.env.EXPO_PUBLIC_YELP_API_KEY

export default function Home({navigation}){
    const [restaurantsData, setRestaurantsData] = React.useState(null)
    const [city, setCity] = React.useState("Irvine");
    const [activeTab, setActiveTab] = React.useState("Delivery");

    React.useEffect(()=> {
        setRestaurantsData(null)
        fetchRestaurants();
    }, [city, activeTab]);

    async function fetchRestaurants() {
        const url = "https://api.yelp.com/v3/businesses/search?location="+ city +"&term=food&sort_by=best_match&limit=30";
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
            <ScrollView vertical
                contentContainerStyle={{flexGrow:1}}
            >
                <Categories/>
                {restaurantsData ?
                <Restaurants restaurantsData={restaurantsData} navigation={navigation}/> 
                :
                <ActivityIndicator size="large"
                style={{ padding : 100 }} />
                }
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs />
        </SafeAreaView>
    );
}