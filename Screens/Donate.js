import {useState, useContext} from "react";
import { AppContext } from "../Settings/globalVariables";
import { View, Text, StyleSheet } from "react-native";
import { SafeArea } from "../Components/SafeArea";
import { Theme } from "../utils/theme";

export function Donate (){
    const {uid} =useContext(AppContext);
    console.log(uid);
    return(
        <SafeArea>
            <Text>Donate</Text>
        </SafeArea>

    )
}

const styles = StyleSheet.create({
    title:Theme.colors.brown300,
    fontSize: Theme.sizes[4]
})