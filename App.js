import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./Screens/StackNavigation";

export default function App (){
  return(
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer> 
  )
}