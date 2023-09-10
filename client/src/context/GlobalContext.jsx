import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [openPlan, setOpenPlan] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [toPurchase, setToPurchase] = useState()


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    //mobile hotspot
    // let res = await axios("http://192.168.43.159:8000/");

    // let res = await axios("http://localhost:8000/");
    let res = await axios("https://beats-server.onrender.com/");

    // home wi-fi
    // let res = await axios("http://192.168.0.110:8000/");
  
    setData(await res.data);
  }

  const [audioSourceRef, setAudioSourceRef] = useState()

  return (
    <GlobalContext.Provider
      value={{
        openPlan,
        setOpenPlan,
        data,
        isLoggedIn,
        setIsLoggedIn,
        isSidebarOpen,
        setIsSidebarOpen,
        toPurchase, 
        setToPurchase,
        audioSourceRef, 
        setAudioSourceRef
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
