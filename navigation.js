import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {Provider as ReduxProvider} from "react-redux";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import configureStore from "./redux/store";
import OrderComplete from "./screens/OrderComplete.js";
import Login from "./screens/Login.js";
import Account from "./screens/Account.js";
import Orders from "./screens/Orders.js";


const store = configureStore();

export default function RootNavigation(){
    const Stack = createStackNavigator();

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={ {headerShown:false}} >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
                    <Stack.Screen name="OrderComplete" component={OrderComplete} />
                    <Stack.Screen name="Account" component={Account} />
                    <Stack.Screen name="Orders" component={Orders} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}