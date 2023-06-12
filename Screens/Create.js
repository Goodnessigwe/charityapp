import { View, Text, StyleSheet } from "react-native";
import { SafeArea } from "../Components/SafeArea";
import { useContext } from "react";
import { AppContext } from "../Settings/globalVariables";
import { Button, TextInput } from "react-native-paper";

export function Create ({navigation}) {
    const { uid } = useContext(AppContext);
    
    return uid !== null ? (
        <SafeArea>
            <Text style={styles.mainTitle}>Create a Fund Raiser</Text>
            <Text style={styles.crimeAlert}>This app is a demonstration app built by a Cohort of students and instructor
            at early code. This app must not be use by any means for frudulent purposes. The students and instructor 
            takes no responsible for any act of crime on the app.</Text>
        </SafeArea>
    )
    :(
        <SafeArea>
           <View style={styles.wrapper}>
              <Text style={styles.subHeader2}> Login first to create a fund raiser</Text>
              <Button mode="contained" contentStyle={{paddingVertical:4}} onPress={()=>navigation.navigate('Login')}>
                <Text>Go to Signin</Text></Button>
           </View>
        </SafeArea>
    )
}
const styles= StyleSheet.create({
    wrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:16
    },
    subHeader2:{
        fontSize:24,
        textAlign:'center'
    },
    mainTitle:{
        fontSize:26,
        marginBottom:6,
    },
    crimeAlert:{
        fontSize:12,
        color:'gray',
        marginBottom:8
    }

})
//formik- validation, timestamp const stamp= new date().getTime(), decode time stamp to give actual date , as a function that accept 1 argument
//yup