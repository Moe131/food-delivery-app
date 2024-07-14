import React from "react";
import { View, Text, TouchableOpacity} from "react-native"
import { useSelector } from "react-redux";

export default function ViewCart(){
    const items = useSelector((state) => state.cartReducer.selectedItems.items)
    const total = items.map( (item) => 
        Number(item.price.replace("$","") )).
        reduce((prev, curr) => prev + curr , 0);

    const totalString = total.toLocaleString("en", {
        style: "currency",
        currency : "USD",
    });

    if (total> 0) {
        return(
            <View 
                style={{
                    position: "absolute",
                    flex: 1,
                    marginTop : 700,
                    marginLeft: 50
                }}
            >
                <View
                    style={{
                    }}
                >
                    <TouchableOpacity 
                        style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            position: "relative",
                            alignItems: "center",
                            flexDirection: "row",
                            justifyContent:  "flex-end",
                            width: 280,
                            borderRadius: 30,
                            padding: 13
                        }}
                    >
                        <Text style={{ color: "white",fontSize: 20, marginRight:20}}> VIEW CART</Text>
                        <Text style={{ color: "white",fontSize: 20}}> {totalString}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    else {
        return ( <View></View>)
    }
   
}