import React from "react";
import {View, Text, Image, ScrollView} from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";


export default function MenuItems({restaurantName, foods, marginLeft, hideCheckbox }){
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
                        { hideCheckbox ? 
                        (<></>) : 
                        ( <BouncyCheckbox fillColor= "green" 
                        onPress= {(checkboxValue) => selectItem(food, checkboxValue)}
                        isChecked = {isFoodInCart(food, cartItems)}
                        /> )
                        }
                        <FoodInfo food={food} />
                        <FoodImage food={food} marginLeft={marginLeft ? marginLeft: 0} />
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
        <Image source={{uri : props.food.image}} style={{marignLeft:props.marginLeft, width: 80, height:80, borderRadius:15}}/>
    )
}

