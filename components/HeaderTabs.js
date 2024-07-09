import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default function HeaderTabs(){
    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            {/* Header buttons */}
            <HeaderButtons text="Delivery" btnColor="black" textColor="white"/>
            <HeaderButtons text="Pickup" btnColor="white" textColor="black" />
        </View>
    );
}

const HeaderButtons = (props) => (
        <TouchableOpacity 
            style={{
                backgroundColor : props.btnColor,
                paddingVertical: 6,
                paddingHorizontal : 16,
                borderRadius : 30
            }}
        >
            <Text style = {{color:props.textColor, fontSize: 15, fontWeight:90 }}>{props.text}</Text>
        </TouchableOpacity>
    );