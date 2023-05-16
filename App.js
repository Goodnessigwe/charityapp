import { Login } from "./Screens/Login";
import { SafeArea } from "./Components/SafeArea";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function App (){
  return(
    <SafeArea>
     <Login/>
    </SafeArea> 
    
  )
}