import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

export default function HeaderTabs(){
    const [activeTab, setActiveTab] = React.useState("Delivery")
    return (
        <View style={{flexDirection: "row", alignSelf: "center"}}>
            {/* Header buttons */}
            <HeaderButtons 
                text="Delivery" 
                activeTab={activeTab}
                setActiveTab={setActiveTab}/>
            <HeaderButtons 
                text="Pickup" 
                activeTab={activeTab}
                setActiveTab={setActiveTab}/>
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
            <Text style = {{color:props.text === props.activeTab ? "white" : "black" , fontSize: 16, fontWeight:90 }}>{props.text}</Text>
        </TouchableOpacity>
    );