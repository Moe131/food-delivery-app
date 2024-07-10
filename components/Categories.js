import React from "react";
import {View, Text, Image, ScrollView} from "react-native";

const items = [
    {   
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick-up"
    },
    {   
        image: require("../assets/images/soft-drink.png"),
        text: "Soft drinks"
    },
    {   
        image: require("../assets/images/bread.png"),
        text: "Bakery Items"
    },
    {   
        image: require("../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {   
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {   
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea"
    }
]

export default function Categories(){
    return (
        <View 
            style={{
                marginTop: 6,
                backgroundColor :"white",
                paddingVertical : 10,
                paddingLeft: 20, 
            }}
        >
            <ScrollView horizontal> 
                { items.map( (item,index) => (
                     <View key={index} style={{marginLeft: 12, alignItems :"center"}}>
                        <Image source={item.image} style={{width: 50, height:40 , resizeMode: "contain"}}/>
                        <Text style={{fontSize:13, fontWeight:900}}> {item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
