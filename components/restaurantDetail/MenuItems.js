import React from "react";
import {View, Text, Image, ScrollView} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";


const foods = [
    {
        title : "Tandoori Chicken",
        description : "Good indian food",
        price: "$23.00",
        image : "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        title : "Tandoori Chicken",
        description : "Good indian food",
        price: "$23.00",
        image : "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        title : "Tandoori Chicken",
        description : "Good indian food",
        price: "$23.00",
        image : "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },    {
        title : "Tandoori Chicken",
        description : "Good indian food",
        price: "$23.00",
        image : "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        title : "Steak",
        description : "Very good",
        price: "$19.00",
        image : "data:image/jpeg;base64,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"
    },
    {
        title : "Tandoori Chicken",
        description : "Good indian food",
        price: "$23.00",
        image : "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    }
]

export default function MenuItems(){
    return (
        <ScrollView vertical>
            {foods.map((food, index) => {
                return (
                    <View key={index} >
                        <View 
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            margin: 20
                            }}
                        >
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                        </View>
                        <Divider width={0.5} />
                    </View>
                )
            })}
        </ScrollView>
    );
} 


function FoodInfo(props) {
    return(
        <View 
            style={{
                width: 240, justifyContent: "space-evenly"
            }}
        >
            <Text style= {{fontSize: 19, fontWeight: "600"}}> {props.food.title} </Text>
            <Text> {props.food.description} </Text>
            <Text> {props.food.price} </Text>
        </View>
    )
}



function FoodImage(props) {
    return(
        <Image source={{uri : props.food.image}} style={{width: 90, height:90, borderRadius:15}}/>
    )
}

