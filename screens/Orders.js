import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabs from "../components/home/BottomTabs";
import { Divider } from "react-native-elements/dist/divider/Divider";



export default function Orders({navigation, route}){
    const [user, setUser] = React.useState()

    React.useEffect( () => {
        getUser()
    }, [] )

    async function getUser(){
        try {
          const value = await AsyncStorage.getItem('user');
          if (value !== null) {
            setUser(value)
          }
        } catch (e) {
            console.log(e)
        }
      };

    return (
    <SafeAreaView style= {{backgroundColor: "#ffd95c", flex: 1}}>
        <Text style={{alignSelf:"center", fontSize:15, marginVertical:30, flex:1}}>Your orders</Text>
        <View
            style={{bottom:0}}
        >
            <Divider width={1}/>
            <BottomTabs navigation={navigation}/>
        </View>
    </SafeAreaView>
    )
}