import { Form} from "react-router-dom";
import axios from "axios";
import { SearchIcon  } from "./Icons";
import useGlobal from "../hooks/useGlobal";

export default function Search() {  
  const {isSidebarOpen, setIsSidebarOpen} = useGlobal()

  const toggleSideBar =()=>{
    if(isSidebarOpen){
      setIsSidebarOpen(false)
    }
  }
  return (
    <div className="fixed top-14 px-4 bg-gray-600 w-full py-2 z-50" onClick={toggleSideBar}>
        <Form method="post" action="/search" className="flex justify-center align-middle">
            <input type="text" name="name" autoComplete="off" className="rounded-lg py-1 px-2 w-full" placeholder='search mood like "chiil" or producer'/>
            <div className="flex"> <button className="px-2 text-white"> <SearchIcon /></button></div>
        </Form>
    </div>
  )
}

export const searchAction = async ({request}) => {
    const dataForm = await request.formData()
    const searchTerm = dataForm.get("name")

    // let res = await axios.get(`http://192.168.43.159:8000/api/${searchTerm}`)
    let res = await axios.get(`https://beats-server.onrender.com/api/${searchTerm}`);
    
    return await res.data
}


