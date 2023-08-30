import {createContext, useState } from 'react'


const GlobalContext  = createContext()

export const GlobalProvider = ({children}) =>{
    const [openPrice, setOpenPrice] = useState(false)
    
    
    return <GlobalContext.Provider value={{openPrice, setOpenPrice}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext