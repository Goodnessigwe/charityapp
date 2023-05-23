import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./Screens/StackNavigation";
import { AppProvider } from "./Settings/globalVariables";

export default function App (){
  return(
    <AppProvider>
      <NavigationContainer>
         <StackNavigation/>
      </NavigationContainer> 
    </AppProvider>
  )
}