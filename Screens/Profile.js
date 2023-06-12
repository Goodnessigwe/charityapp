import { useContext,useEffect, useState } from "react";
import { View,StyleSheet,Text,Image,SafeAreaView } from "react-native";
import { AppContext } from '../Settings/globalVariables';
import { SafeArea } from "../Components/SafeArea";
import { Theme } from "../utils/theme";
import { Button,TextInput} from "react-native-paper";
import { Formik } from 'formik';
import * as yup from 'yup';
import { db } from '../Settings/firebase.setting';
import { getDoc,doc } from "firebase/firestore";

const validationRules = yup.object({
    name:yup.string(),
    email:yup.string(),
    phoneNo:yup.number(),
    bio:yup.string(),
});


export function Profile ({navigation}) {
    const { uid } = useContext(AppContext);
    //updated useState after data is fetched
    const [userRecords,setUserRecords] = useState({});

    //fetch data after component is loaded
    /*useEffect(() => {
        const handleGetUserRecords = async () => {
            const snapShot = await getDoc(doc(db,'users',uid));

            setUserRecords(snapShot.data());
        }

        handleGetUserRecords();
    },[]);
    console.log(userRecords);*/
    return (
     <SafeAreaView style={styles.container}>
        <Image source={require("../assets/profilepix3.png")}style={styles.image}/>
    
        <Formik
        initialValues={{ name:'',email:'',phoneNo:'',bio:'', }}
        onSubmit={(values,action) => {
            getDoc(doc(db,'users',uid),{
            Name:values.name,
            email:values.email,
            phoneNumber:values.phoneNo,
            bioInfo:values.bio,
            })
        }}
        validationSchema={validationRules}
        >
            {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
            <View style={styles.form}>
                <View>
                <TextInput
                    outlineColor="gray"
                    activeOutlineColor="#80D8FF"
                    style={styles.input}
                    mode="outlined"
                    label='Name'
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                />
                {touched.name && errors.name ? <Text style={{color:'red'}}>{errors.fName}</Text> : null}
                </View>
                <View>
                <TextInput
                    outlineColor="gray"
                    activeOutlineColor="#80D8FF"
                    style={styles.input}
                    mode="outlined"
                    label='Email'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                />
                {touched.email && errors.email ? <Text style={{color:'red'}}>{errors.email}</Text> : null}
                </View>
    
                <View>
                <TextInput
                    outlineColor="gray"
                    activeOutlineColor="#80D8FF"
                    style={styles.input}
                    mode="outlined"
                    label='Phone Number'
                    onChangeText={handleChange('phoneNo')}
                    onBlur={handleBlur('phoneNo')}
                    value={values.phoneNo}
                />
                {touched.phoneNo && errors.phoneNo  ? <Text style={{color:'red'}}>{errors.phoneNo}</Text>  : null}
                </View>
    
                <View>
                <TextInput
                    outlineColor="gray"
                    activeOutlineColor="#80D8FF"
                    style={styles.input}
                    mode="outlined"
                    label='bio'
                    onChangeText={handleChange('bio')}
                    onBlur={handleBlur('bio')}
                    value={values.bio}
                    multiline={true}
                />
                {touched.bio && errors.bio ? <Text style={{color:'red'}}>{errors.bio}</Text> : null}
                </View>
        
                <Button
                buttonColor="#80D8FF"
                mode="contained"
                onPress={handleSubmit}
                contentStyle={{paddingVertical:6}}
                style={{marginVertical:12,width:300,}}>
                   Submit
                </Button>
            </View>
            )}
        </Formik>
     </SafeAreaView>
 
    )
}
const styles = StyleSheet.create({
   container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Theme.colors.white,
   },
   image:{
    flex:0.5,
    width:'100%',
    height:'50%',
    marginTop:0,
   },
   form:{
    flexDirection:'column',
    width:'100%',
    gap:2,
    backgroundColor:Theme.colors.white,
    flex:0.5,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15,
    marginBottom:25,
  },
  input:{
    marginTop:15,
    width:300,
    //backgroundColor:Theme.colors.blue100,
},
    
})
