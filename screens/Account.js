import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Account({navigation, route}){
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
        <Text style={{alignSelf:"center", fontSize:15, marginVertical:30}}>Welcome back {user} !</Text>
    </SafeAreaView>
    )
}