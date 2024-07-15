import React from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView} from "react-native"
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function ViewCart(){
    const [modalVisible, setModalVisible] = React.useState(false);

    const {items, restaurantName }= useSelector((state) => state.cartReducer.selectedItems)

    const total = items.map( (item) => 
        Number(item.price.replace("$","") )).
        reduce((prev, curr) => prev + curr , 0);

    const totalString = total.toLocaleString("en", {
        style: "currency",
        currency : "USD",
    });

    function checkoutModalContent() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    backgroundColor: "rgba(0,0,0,0.7)",
                }}
            >  
                <View
                    style={{
                        backgroundColor: "white",
                        padding: 16,
                        height: 500,
                        borderWidth: 1,

                    }}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: 18,
                            marginBottom: 10
                        }}    
                    > {restaurantName}</Text>
                    <ScrollView>
                    {items.map( (item, index) => { return <OrderItem index={index} item={item} />})}
                    </ScrollView>
                    <View style={{flexDirection:"row", justifyContent: "space-between", marginTop: 15, marginHorizontal:15}}>
                        <Text style={{fontWeight:"600", fontSize:15}}>Subtotal</Text>
                        <Text>{totalString}</Text>
                    </View>
                    <TouchableOpacity 
                        style={{
                            marginVertical: 30,
                            backgroundColor: "black",
                            alignItems: "center",
                            padding: 13,
                            borderRadius: 30,
                            width: 300,
                            position: "relative",
                            alignSelf: "center"
                        }}
                        onPress={()=> setModalVisible(false)}
                    >
                        <Text style={{ color : "white"}}> Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <>
        <Modal 
            animationType="slide" 
            visible={modalVisible}
            transparent= {true}
            onRequestClose={ () => setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
        { total>0 && (
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
                        onPress={ ()=> setModalVisible(true)}
                    >
                        <Text style={{ color: "white",fontSize: 20, marginRight:18}}> VIEW CART</Text>
                        <Text style={{ color: "white",fontSize: 20, paddingRight: 2}}> {totalString}</Text>
                    </TouchableOpacity>
                </View>
            </View> ) }
            </> 
        )
}