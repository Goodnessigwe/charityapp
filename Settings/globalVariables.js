import { createContext, useState } from "react";


const AppContext = createContext();

function AppProvider ({children}) {
    const [firstName, setFirstName] = useState('Goodness');
    const [uid, setUid] = useState('555ggg');


    return(
        <AppContext.Provider value={{firstName,setFirstName,uid,setUid}}>
            {children}

        </AppContext.Provider>
    )
}
export{AppContext,AppProvider}