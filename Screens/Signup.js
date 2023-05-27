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
import * as yup from 'yup';

const validationRules = yup.object({
  email:yup.string().required('you must fill this fild').min(5).max(36),
  password:yup.string().required().min(4)
  .oneOf([yup.ref('passwordConfirmation'),null],'password must match')
});

export function Signup ({navigation}) {
  // const [text, setText] = useState("");
  // const [number, setNumber] = useState("");
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

  return (
    <SafeArea>
      <View style={styles.heading}>
        <Text  style={{marginTop:10,textAlign:'center'}}>Charity App</Text>
        <Text  style={{marginTop:5, textAlign:'center'}}>Create a donator account</Text>
      </View>

      <Formik
        initialValues={{ email: '', password:'',passwordConfirmation:'' }}
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
                <TextInput
                  mode="outlined"
                  label='confirm password'
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Button 
                mode='contained'
                onPress={handleSubmit} 
                contentStyle={{paddingVertical:6}}
                style={{marginVertical:12}}
                title="Submit">Create account</Button>
          </View>
        )}
      </Formik>
      <View style={{ alignContent:'center', flexDirection:'row', alignItems:'center'}}>
                <Text style={{fontSize:20}}>Aready have an account?</Text>
                <TouchableOpacity  onPress={()=>navigation.navigate('Login')}>
                    <Text style={{ fontSize:20, color:'blue' }}>Login</Text>
                </TouchableOpacity>
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