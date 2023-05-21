import {useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeArea } from "../Components/SafeArea";
import { Theme } from "../utils/theme";
import * as React from "react";
import { Button } from "react-native-paper";

export function About (){
    return(
        <SafeArea>
            <View style={Styles.container}>
                <Text style={Styles.appText1}>Charity app</Text>
                <Text style={Styles.appText2}>Donate to a worthy course</Text>
                <View style={Styles.textWrap}>
                    <Text style={{color:Theme.colors.white,fontSize:16, marginTop:10}}>The Charity App Foundation's Missions- Onchaned since 1913- 
                        is to promote the well being of humanity through out the world. Today the Foundation advances
                        new frontiers of science, data, policy, and innovations to solve global challenges 
                        related to health, food, power and economic mobility</Text>
                </View>
                <Button  mode="contained" onPress={() => console.log('Pressed')} style={Styles.btn}>
                   Make a Donation
               </Button>
            </View>
        </SafeArea>

    )
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Theme.colors.purple500,
    },
    appText1:{
        color:Theme.colors.purple700,
        textAlign:'center',
        fontSize:32,
        paddingTop:40, 
    },
    appText2:{
        color:Theme.colors.black,
        textAlign:'center',
        fontSize:20,
    },
    textWrap:{
        flex:0.7,
        margin:20,
        backgroundColor:Theme.colors.purple700,
        borderRadius:10,
        padding:20,
    },
    btn:{
        backgroundColor:Theme.colors.purple700,
        borderRadius:10,
        margin:20,
    }
})