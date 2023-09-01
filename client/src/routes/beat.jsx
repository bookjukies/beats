import { useParams, Link , useLocation} from "react-router-dom"
import { PlayIcon, CartIcon, DownloadIcon } from "../components/Icons"
import { useMedia } from "../stores/mediaStore"
import useGlobal from "../hooks/useGlobal"

function Beat() {
    const {data} = useGlobal()
    let {state } = useLocation()


    const params = useParams()
    const id = params.id
    const play = useMedia(state => state.play)
    

    const beat = state || data.filter(entry => entry.name == id)[0]
 

    const handlePlay = () =>{
        play("hello")
    }
    
  return (
    <div className="text-black w-full h-full  relative mt-24">
        {beat?  <div className={`w-full h-3/5 grid content-end py-2 px-4 bg-cover`} style={{ 
      backgroundImage: `url("/images/${beat.cover}")`}}> 
            <div className=" bg-over absolute top-0 h-3/5 w-screen left-0 grid py-4 "> 
                <button className="bg-black-5 text-white px-3 rounded-full inline w-12 h-12 text-center" onClick={handlePlay}><PlayIcon /></button>
                
                <h1 className="text-3xl font-bold my-2 text-white">{id}</h1>
                <h2 className="my-2 text-xl font-medium text-white"><Link>{beat.title}</Link></h2>
                <Link className="bg-gray-800 text-gray-200 py-1 px-4 rounded-xl w-16 h-8 inline-block" to=''>{beat.type}</Link>
            </div>
         </div> : null}

        <div className="px-2">
         <button className="bg-sky-500 text-white flex w-full py-2 rounded-md my-2 justify-center gap-2 font-semibold text-lg"> <CartIcon /> Buy for R 500.00</button>
         <button className="bg-gray-500 text-white flex w-full py-2 rounded-md my-2 justify-center gap-2 font-semibold text-lg"> <DownloadIcon /> Download for free</button>

         <details className="bg-gray-600 py-2  text-white rounded-md w-full">
            <summary className="px-4 font-semibold text-lg py-2">Track Datails</summary>
            <div className="p-4 w-full border-y-2 border-gray-400">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>INFORMATION</th>
                            <th></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Published</td>
                            <td>12 August 2023</td>
                        </tr>
                        <tr>
                            <td>BPM</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Plays</td>
                            <td>200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="pb-12">
                <h3 className="p-4 font-semibold text-lg">About</h3>
                <p className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Et, harum sequi numquam doloribus provident velit laudantium
                      atque reprehenderit quod aliquam consequatur expedita,
                      vitae fugit placeat totam magni quisquam! Omnis, fugit?
                </p>
            </div>
         </details>
         
        </div>
       
    </div>
  )
}

export default Beat