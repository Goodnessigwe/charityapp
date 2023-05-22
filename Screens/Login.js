import { useState,useEffect, useCallback } from "react";
import { SafeArea } from "../Components/SafeArea";
import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';

export function Login ({navigation}){
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({Pacifico_400Regular});
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }




    return(
        <SafeArea>
            
            <View style={StyleSheet.center}>
            <View>
            <Text  style={{marginTop:10,textAlign:'center'}}>Charity App</Text>
            <Text  style={{marginTop:5, textAlign:'center'}}>Login to your Charity App account</Text>
            </View>
            <View>
                <TextInput
                style={{marginTop:10}}
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
                />
                <TextInput
                style={{marginTop:10}}
                label="Password"
                value={text}
                onChangeText={text => setText(text)}
                />
                <Button  style={{marginTop:20}}mode="contained" onPress={() => navigation.navigate('My Home',{
                  firstName:'Goodness',
                  city:'Abuja',
                  score:[4,9,9,9]
                })}>
                    Log in
                </Button>
            </View> 
            <View style={{fontSize:20, alignContent:'center', flexDirection:'row', alignItems:'center'}}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity  onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'blue' }}>Sign up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </SafeArea>

    )
}
const styles = StyleSheet.create({
    center:{
        flex:1,
        backgroundColor:'red',
    }
})