import React from "react";
import {View, Text} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";


GOOGLE_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

export default function SearchBar(props){
    return (
        <View style={{marginTop: 15, flexDirection: "row"}}>
            <GooglePlacesAutocomplete 
                query={{key: GOOGLE_API_KEY}}
                onPress={(data, details = null) => {
                        const city = data.description.split(',')[0]
                        props.cityHandler(city)
                    } }
                styles={{
                    textInput: {
                        backgroundColor : "#eee",
                        borderRadius: 20,
                        fontWeight : "700",
                        marginTop : 7
                    },
                    textInputContainer: {
                        backgroundColor : "#eee",
                        borderRadius : 15,
                        flexDirection : "row",
                        alignItems : "center",
                        marginRight : 10
                    }
                }}
                renderLeftButton={ () => (
                    <View style={{marginLeft: 10}}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View 
                        style={{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            borderRadius : 10,
                            padding : 9,
                            alignItems: "center"
                            }}
                    >
                        <AntDesign name="clockcircle" size={11}/>
                        <Text style={{marginLeft: 6}}>Search</Text>
                    </View>
                )}
                placeholder="Search"
                 />
        </View>
    );
}