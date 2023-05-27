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
import { Formik } from "formik";
import * as yup from "yup";


const validationRules = yup.object({
  email:yup.string().required('this fild is required'),
  password:yup.string().required('this fild is required')
});

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
            <Formik
        initialValues={{ email: '', password:''}}
        onSubmit={(values, action )=>{
          console.log(values, values.email);
        } }
        validationSchema={validationRules}

      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
                <TextInput
                    mode="outlined"
                    label='email'
                    style={styles.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email?<Text style={{color:'red'}}>{errors.email}</Text>: null }
              
                <TextInput
                  mode="outlined"
                  label='password'
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                />
                {touched.email && errors.email?<Text style={{color:'red'}}>{errors.password}</Text>: null }
                <Button 
                mode='contained'
                onPress={handleSubmit} 
                contentStyle={{paddingVertical:6}}
                style={{marginVertical:12}}
                title="Submit">Create account</Button>
          </View>
        )}
      </Formik>
            <View style={{alignContent:'center', flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:20}}>Don't have an account?</Text>
                <TouchableOpacity  onPress={()=>navigation.navigate('Signup')}>
                    <Text style={{fontSize:20, color:'blue' }}>Sign up</Text>
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