import{useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput} from "react-native";
import {sampleData} from '../assets/data/sample-data';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { SafeArea } from '../Components/SafeArea';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Donate } from './Donate';
import { About } from './About';
import { Theme } from '../utils/theme';

const Tab = createBottomTabNavigator();

 function Home (){
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({Pacifico_400Regular});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return(
    <SafeArea>
    
        <View style={styles.header}>
            <View style={styles.leftHeader}>
                <Image source={require('../assets/charityapp.png')}
                alt='app logo'
                style={styles.logo}/>
                <Text style={styles.brandName}>CharityApp</Text>
            </View>

            <FontAwesomeIcon icon={faUser} color="blue" size={36}/>
        </View>
        <View style={styles.body}>
        <View style={styles.actionBlock}>

            <View style={styles.actionBox}>
            
            </View>
            <View style={styles.actionBox}>
            
            </View>
            <View style={styles.actionBox}>
            
            </View>
            <View style={styles.actionBox}>
            
            </View>
            
        </View>
        <View style={styles.recent}>
        <Text style={styles.recentTitle}>Recent Donations</Text>
            

            <View style={styles.recentSroll}>
                <FlatList
                data={sampleData}
                renderItem={({item}) =>{
                return(
                    <View style={styles.recentBlock}>
                
                    <View style={styles.donationDetails}>
                        <Text style={styles.donationAmount}>₦{item.amount}</Text>
                        
                        <Text style={styles.donationInfo}>{item.time}minute ago</Text>
                        

                    </View>
                        <Text style={styles.donatedBy}>Donated by{item.email}</Text>
                    </View>

                )
                }}
                key={({item})=>item.id}
                showsVerticalScrollIndicator={false}/>
            </View>

        </View>
        </View>
          </SafeArea>  
                 
  )
}
export function MyHome ({navigation,route}){
  const{firstName,city,score}=route.params;
  console.log(firstName);
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
            } else if (route.name === 'Donate') {
              iconName = focused ? 'heart-circle-sharp' : 'heart-circle-outline';
            }else if (route.name === 'About') {
                iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Theme.colors.purple300,
          fontSize:Theme.sizes[4],
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="Donate" component={Donate} options={{headerShown:false}}/>
        <Tab.Screen name="About" component={About} options={{headerShown:false}}/>
      </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
  
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  leftHeader:{
    flexDirection:'row',
    alignItems:'center'
  },
  logo:{
    width:52,
    height:52,
    marginRight:4

  },
  brandName:{
    fontSize:28,
    fontWeight:'bold',
    color:'red',
    fontFamily:'Pacifico_400Regular',

  },
  headerIcon:{
    width:48,
    height:48

  },
  body:{
    flex:1,
    marginTop:10,
    
  },
  actionBlock:{
    flex:2.5,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap',
    gap:6,
    padding:8,
    backgroundColor:'#E34DA2',
    borderRadius:10,


  },
  recent:{
    flex:3.5,
    marginTop:8,
    padding:8,
    borderRadius:8,
    backgroundColor:'#FDE2F3'

    
  },
  actionBox:{
    width:'49%',
    height:'49%',
    backgroundColor:'#77037B',
    borderRadius:10,

  },
  recentBlock:{
    backgroundColor:'#5C469C',
    padding:6,
    borderRadius:8,
    marginBottom:3
  },
  recentSroll:{
    flex:1,
    flexDirection:'column'
    
  },
  donationDetails:{
    flexDirection:'row',
    justifyContent:'space-between'

  },
  donationAmount:{
    fontSize:20,
    color:'#fff'

  },
  donationInfo:{
    color:'#D4ADFC'

  },
  donatedBy:{
    color:'#D4ADFC',
    fontSize:16,

  },
  // Assignment styles
  headerView:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    fontSize:30


  },
  leftHeaderView:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff'
  },
  bottomView:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginTop:5,
  },
  upAndDownView:{
    flex:1,
    backgroundColor:'#FEF2F4',
    marginTop:5,
    padding:20,
    
  },
  upViewHeader:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  iconDevelopmentServersView:{
    flexDirection:'row',
    alignItems:'center'
  },
  recentlyOpenAndClearView:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  upView:{
    flex:0.4,
    borderRadius:10,
    borderWidth:0.5,
    backgroundColor:"#fff",
    borderColor:"#fff",
    marginTop:15,

  },
  upView1:{
    flex:0.4,
    padding:10,
    borderWidth:0.5,
    borderColor:"#fff"
    //backgroundColor:"gray"

  },
  upView2:{
    flex:0.3,
    padding:10,
    borderWidth:0.3,
    borderRadius:5,
    margin:5,
    
   // backgroundColor:"blue",

  },
  upView3:{
    flex:0.3,
    padding:10,
    borderWidth:0.5,
    borderColor:"#fff",
    //backgroundColor:"green"

  },
  downView:{
    flex:0.6,
    flexDirection:"column",
    borderRadius:10,
    borderWidth:0.5,
    backgroundColor:"#fff",
    borderColor:"#fff",
    marginTop:5,
  },
  items:{
    flex:1,
    padding:6,
    borderRadius:8,
    marginBottom:3,
    height:50,
    borderWidth:0.5,

  },
  scrollView:{
  
    
    
  },
  

  
        // paddingVertical:80,
        // paddingHorizontal:10,
        // borderRadius:8,
        // marginVertical:20


})