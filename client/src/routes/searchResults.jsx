import { useActionData } from "react-router-dom";
import Beat from "../components/BeatItem";


export default function SearchResults() {
    const data =  useActionData()
    const searchTerm = data.searchTerm 
    const results = data.data
  return (
    <div className="pt-28 px-4 bg-black min-h-screen text-white">
        <h1 className="text-center text-xl font-bold">Showing search results for {`"${searchTerm}"`}</h1>
        {results.length > 0? results.map(result => (<Beat
            key={result.name}
            name={result.name}
            price={result.price}
            cover={result.cover}
            title={result.title}
            type={result.type}
          />)) : <p className="text-center font-bold my-4">No results found  </p>}
    </div>
   
  )
}
