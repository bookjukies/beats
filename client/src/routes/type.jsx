import { useParams } from "react-router-dom"

function Type() {
    const {tag} = useParams()
  return (
    <div className="pt-28">
        <h1>type</h1>
        {tag}
    </div>
  )
}

export default Type