import { useMedia } from "../stores/mediaStore"
import Header from "./header"
import { Outlet, useLoaderData} from "react-router-dom"
import Search from "../components/Search";
import MediaPlayer from "../components/MediaPlayer";




export default function Root() {
  const playing = useMedia(state => state.playing)
    
  const data = useLoaderData()

  return (
    <div className="h-screen relative">
        <Header />
        <Search />
        <Outlet  context={data}/>
        {playing? <MediaPlayer audioSource={"/test.mp3"}/> : null}
    
    </div>
  )
}
