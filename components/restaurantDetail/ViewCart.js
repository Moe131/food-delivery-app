import React from "react";
import { View, Text, TouchableOpacity, Modal, ScrollView, ActivityIndicator} from "react-native"
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "./OrderItem";
import { getFirestore, collection, addDoc, serverTimestamp  } from "firebase/firestore";
import {app} from "../../firebase"

export default function ViewCart({navigation}){
    const [modalVisible, setModalVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false)

    const {items, restaurantName }= useSelector((state) => state.cartReducer.selectedItems);

    const dispatch = useDispatch()
    function selectItem(item, checkboxValue) {
        dispatch (
        {
            type : "ADD_TO_CART",
            payload : {
                ...item,
                restaurantName: restaurantName,
                checkboxValue : checkboxValue,
            }
        })
    }

    const total = items.map( (item) => 
        Number(item.price.replace("$","") )).
        reduce((prev, curr) => prev + curr , 0);

    const totalString = total.toLocaleString("en", {
        style: "currency",
        currency : "USD",
    });

    async function addOrderToFirebase() {
        setLoading(true)
        const db = getFirestore(app);
        await addDoc(collection(db, "orders"), {
            items : items,
            restaurantName: restaurantName,
            createdAt: serverTimestamp()
        });
        setLoading(false)
        setModalVisible(false);
        navigation.navigate("OrderComplete", {items : items , totalString: totalString, restaurantName:restaurantName})
        for (let i=0; i< items.length ; i++){
            selectItem(items[i],false)
        }

    }

    function checkoutModalContent() {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    backgroundColor: "rgba(0,0,0,0.7)",
                }}
                onPress={() => setModalVisible(false)}
                activeOpacity={1}

            >  
                {loading && <ActivityIndicator size="large" style={{ padding : 100 }} /> }

                <TouchableOpacity
                    style={{
                        backgroundColor: loading ? "gray":"#ffd95c",
                        padding: 16,
                        height: 500,
                        borderWidth: 1,

                    }}
                    onPress={()=> {} }
                    activeOpacity={1}
                >
                    <Text
                        style={{
                            textAlign: "center",
                            fontWeight: "600",
                            fontSize: 18,
                            marginBottom: 10
                        }}    
                    > {restaurantName}</Text>
                    <ScrollView >
                        <View onStartShouldSetResponder={() => true}>
                            {items.map( (item, index) => { return <OrderItem key={index} item={item} />})}
                        </View>
                    </ScrollView>
                    <View style={{flexDirection:"row", justifyContent: "space-between", marginTop: 25, marginHorizontal:15}}>
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
                        onPress={()=> addOrderToFirebase()}
                    >
                        <Text style={{ color : "white"}}> Checkout</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
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
        { 
        total>0 && (
            <View 
                style={{
                    position: "absolute",
                    flex: 1,
                    marginTop : 650,
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