import React from "react";
import {View, Text, TouchableOpacity} from "react-native"

export default function ViewCart(){
    return(
        <View 
            style={{
                flex: 1,
                flexDirection: "row",
                position: "absolute",
                bottom: "20%",
                zIndex: 999
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "100%"
                }}
            >
                <TouchableOpacity 
                    style={{
                        marginTop: 20,
                        backgroundColor: "black",
                        position: "relative",
                        alignItems: "center",
                        width: 280,
                        borderRadius: 30,
                        padding: 13
                    }}
                >
                    <Text style={{ color: "white",fontSize: 20}}> VIEW CART</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}