import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default function HeaderTabs(props){
    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            {/* Header buttons */}
            <HeaderButtons 
                text="Delivery" 
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}/>
            <HeaderButtons 
                text="Pickup" 
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}/>
        </View>
    );
}

const HeaderButtons = (props) => (
        <TouchableOpacity 
            style={{
                backgroundColor : props.text === props.activeTab ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal : 16,
                borderRadius : 30
            }}
            onPress={ () => props.setActiveTab(props.text) }
        >
            <Text style = {{color:props.text === props.activeTab ? "white" : "black" , fontSize: 15, fontWeight:900 }}>{props.text}</Text>
        </TouchableOpacity>
    );