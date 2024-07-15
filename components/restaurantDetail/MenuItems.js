import React from "react";
import {View, Text, Image, ScrollView} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
    {
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish",
        price: "$18.49",
        image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg"
    },
    {
        title: "Sushi Platter",
        description: "Assorted sushi with fresh fish",
        price: "$30.00",
        image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg"
    },
    {
        title: "Beef Tacos",
        description: "Mexican beef tacos with salsa",
        price: "$14.99",
        image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
    },
    {
        title: "Caesar Salad",
        description: "Fresh salad with Caesar dressing",
        price: "$12.00",
        image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
    },
    {
        title: "Margherita Pizza",
        description: "Classic pizza with tomatoes and cheese",
        price: "$20.00",
        image: "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg"
    },
    {
        title: "Chocolate Cake",
        description: "Rich chocolate cake with frosting",
        price: "$8.00",
        image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg"
    },
    {
        title: "Pad Thai",
        description: "Thai stir-fried noodles with shrimp",
        price: "$17.49",
        image: "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg"
    }
];


export default function MenuItems({restaurantName}){
    const dispatch = useDispatch();

    const selectItem = (item, checkboxValue) => dispatch(
    {
        type : "ADD_TO_CART",
        payload : {
            ...item,
            restaurantName: restaurantName,
            checkboxValue : checkboxValue,
        }
    })

    const cartItems = useSelector( 
        (state) => state.cartReducer.selectedItems.items
    );

    function isFoodInCart(food, cart ){
        return (
            Boolean( cart.find( (item) => item.title === food.title ) )
        )
    }

    return (
        <ScrollView vertical>
            {foods.map((food, index) => {
                return (
                    <View key={index} >
                        <View 
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            margin : 17
                        }}
                        >
                        <BouncyCheckbox fillColor= "green" 
                        onPress= {(checkboxValue) => selectItem(food, checkboxValue)}
                        isChecked = {isFoodInCart(food, cartItems)}
                        />
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
        <Image source={{uri : props.food.image}} style={{width: 80, height:80, borderRadius:15}}/>
    )
}

