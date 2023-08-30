import { useParams } from "react-router-dom"

function Producer() {
    const {id} = useParams()
  return (
    <div className="pt-28">
        <h1>Producer</h1>
    {id}
    </div>
  )
}

export default Producer