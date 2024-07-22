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
                placeholder="Search"
                textInputProps={{
                    placeholderTextColor: 'black',
                  }}
                query={{key: GOOGLE_API_KEY}}
                onPress={(data, details = null) => {
                        const city = data.description.split(',')[0]
                        props.cityHandler(city)
                    } }
                styles={{
                    textInput: {
                        backgroundColor : "white",
                        borderRadius: 0,
                        fontWeight : "700",
                        marginTop : 7,
                    },
                    textInputContainer: {
                        backgroundColor : "white",
                        borderRadius : 5,
                        flexDirection : "row",
                        alignItems : "center",
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
                            backgroundColor: "black",
                            borderRadius : 10,
                            padding : 9,
                            alignItems: "center"
    
                            }}
                    >
                        <AntDesign name="clockcircle" color={"white"} size={11}/>
                        <Text style={{marginLeft: 6, color: "white"}}>Search</Text>
                    </View>
                )}
                 />
        </View>
    );
}