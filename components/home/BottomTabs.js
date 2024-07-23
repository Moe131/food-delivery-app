import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import FontAwsome5 from "react-native-vector-icons/FontAwesome5"

export default function BottomTabs({navigation}){
    return (
        <View 
            style={{
                flexDirection: "row", 
                margin: 10,
                marginHorizontal: 30,
                justifyContent: "space-between"
            }} 
            onPress={() => console.log("pressed")}
            >
            <Icon icon="home" text="Home" dest="Home" navigation={navigation}/> 
            <Icon icon="search" text="Browse" dest="Home" navigation={navigation}/> 
            <Icon icon="receipt" text="Orders" dest="Home" navigation={navigation}/> 
            <Icon icon="user" text="Account" dest="Account" navigation={navigation}/> 
        </View>
    );
} 

function Icon(props){
    return (
        <TouchableOpacity onPress={() => {props.navigation.navigate(props.dest)}}>
            <View>
                <FontAwsome5 
                    name={props.icon}
                    size={25}
                    style={{
                        marginBottom: 3,
                        alignSelf: "center"
                    }}
                />
                <Text>{props.text}</Text>
            </View>   
        </TouchableOpacity>
    )
}
