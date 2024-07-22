import React from "react";
import {View, Text, TextInput, ImageBackground, ActivityIndicator, Pressable, StyleSheet} from "react-native";
import {app} from "../firebase"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import backgroundImage from "../assets/images/background.jpeg"

export default function Login({navigation}){
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [error, setError] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const FIREBASE_AUTH = getAuth(app);

    async function signIn(){
        setLoading(true);
        try {
            const resp = await signInWithEmailAndPassword(FIREBASE_AUTH,email,password)
            console.log(resp)
        } catch(error) {
            setError("Wrong email/password");
            return;
        } finally {
            setLoading(false);
        }
        setError();
        navigation.navigate("Home");
    }

    async function signUp(){
        setLoading(true);
        try {
            const resp = await createUserWithEmailAndPassword(FIREBASE_AUTH,email,password)
            console.log(resp)
        } catch(error) {
            setError(error.message);
            return;
        } finally {
            setLoading(false)
        }
        setError();
        navigation.navigate("Home");
    }

    return (
        <View style={{flex:1}}>
        <ImageBackground source={backgroundImage} resizeMode="cover" style={{flex:1}}>
        <View
            style={styles.container}
        >
            <Text style={{alignSelf:"center", fontSize:35, fontWeight: 'bold'}}> Sign In</Text>
            <TextInput 
                style={ styles.input}
                value= {email}
                placeholder= "Email"
                placeholderTextColor="gray" 
                onChangeText={ (text)=> setEmail(text)}
            />
            <TextInput 
                style={ styles.input}
                value= {password}
                secureTextEntry = {true}
                placeholder= "Password"
                placeholderTextColor="gray" 
                onChangeText={ (text)=> setPassword(text)}
            />
            <Text style={styles.error}> {error}</Text>
            {loading ? (<ActivityIndicator size="large" />) : (
                <>
                    <Pressable style={styles.button} onPress={()=> signIn()} >
                        <Text style={styles.text}>Login</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=> signUp()} >
                        <Text style={styles.text}>Sign up</Text>
                    </Pressable> 
                </>          
            )
            }
        </View>
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 100,
        marginHorizontal: 50,
    },

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      backgroundColor: 'black',
      marginVertical: 5,
      marginHorizontal: 80
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
    error: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        alignSelf: "center",
        marginVertical: 5
      },
    input: {
        borderWidth:1,
        padding: 10,
        borderRadius: 4,
        marginTop: 15,
        fontSize:16
    }
  });