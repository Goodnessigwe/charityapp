import {useState, useContext} from "react";
import { AppContext } from "../Settings/globalVariables";
import { View, StyleSheet } from "react-native";
import { SafeArea } from "../Components/SafeArea";
import { Theme } from "../utils/theme";
import * as React from 'react';
import { Button, Card, Text } from 'react-native-paper';

export function FundRaisers ({navigation}){
    const {uid} =useContext(AppContext);
    
    return(
        <SafeArea>
            <Card style={{}}>
                {/* <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                <Text variant="titleLarge">Card title</Text>
                <Text variant="bodyMedium">Card content</Text>
                </Card.Content> */}
                <Card.Cover source={{ uri: 
                    'https://media.istockphoto.com/id/108353497/photo/east-african-children-in-an-orphanage.jpg?s=612x612&w=0&k=20&c=y4Ss1cDpeDlMzahYkN5riOjuC9RO3TkaUA_wXxQMZ8o='
                     }} />
                <Text style={{color:Theme.colors.emerald, fontWeight:'bold', fontSize:20, marginLeft:20}}>ROCKLIN, CA</Text>
                <Text style={{fontWeight:'bold', fontSize:20, marginLeft:20}}>The final act of kindness</Text>
                <Text style={{textAlign:"left", marginLeft:14, marginTop:20}}>Last donation 8minute ago</Text>
                <View style={styles.progressBarContainer}>
                <View style={styles.progressBar}></View>
                </View>
                <Text style={{textAlign:"left", marginLeft:14, marginTop:5, paddingBottom:10, fontSize:20}}>
                    <Text style={{fontWeight:'bold'}}>$40,445 raised</Text> 
                       <Text> of $30,000</Text>
                </Text>
                 <Card.Actions>
                   <Button style={{backgroundColor:Theme.colors.white2,color:Theme.colors.emerald,borderColor:Theme.colors.emerald}}
                   onPress={()=>navigation.navigate('Donate')}>
                    <Text style={{color:Theme.colors.emerald, fontSize:18}}>Donate</Text>
                    </Button>
                   {/* <Button>Ok</Button>  */}
                 </Card.Actions> 
                
            </Card>
        </SafeArea>

    )
}

const styles = StyleSheet.create({
    progressBarContainer:{
        width:'90%',
        marginLeft:14,
        marginTop:5,
    },
    progressBar:{
        width:'100%',
        height:10,
        backgroundColor:Theme.colors.emerald,
        borderWidth:0.5,
        borderColor:Theme.colors.black,
        borderRadius:5,
        flexDirection:'row'
    }
    //title:Theme.colors.brown300,
    //fontSize: Theme.sizes[4]
})