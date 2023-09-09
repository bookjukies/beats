import { useActionData } from "react-router-dom";
import Beat from "../components/BeatItem";
import { useMedia } from "../stores/mediaStore";



export default function SearchResults() {
    const data =  useActionData()
    const searchTerm = data.searchTerm 
    const results = data.data

    const {setPlayList} = useMedia()
    const handlePlayist = () =>{
      setPlayList(results)
    }


    
  return (
    <div className="pt-28 px-4 bg-black min-h-screen text-white">
        <h1 className="text-center text-xl font-bold">Showing search results for {`"${searchTerm}"`}</h1>
        {results.length > 0? results.map(result => (<Beat
            key={result.name}
            name={result.name}
            price={result.price}
            cover={result.cover}
            producer={result.producer}
            type={result.type}
            url={result.url}
            modifyPlayList = {handlePlayist}
          />)) : <p className="text-center font-bold my-4">No results found  </p>}
    </div>
   
  )
}
