
import { useActionData } from "react-router-dom";

export default function SearchResults() {
    const results =  useActionData() || []
   
 
  return (
    <div className="pt-28 px-4">
        {results.length > 0? results.map(result => (<p key={ result.name }>{result.name}</p>)) : <p>No results found  </p>}
    </div>
  )
}
