import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

const GlobalContext  = createContext()

export const GlobalProvider = ({children}) =>{
    const [data, setData] = useState([])
    const [openPrice, setOpenPrice] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
       getData()
    },[])
    
    async function getData () {
        let res = await axios('http://192.168.43.159:8000/')
        setData(await res.data)
    }
    
    return <GlobalContext.Provider value={{openPrice, setOpenPrice, data, isLoggedIn, setIsLoggedIn}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext