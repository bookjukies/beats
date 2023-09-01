
import { useOutletContext } from "react-router-dom"
import PlanList from "../components/PlanList"
import BeatList from "../components/BeatList"
import Carousel from "../components/Carousel"




export default function Index() {
  
  const data = useOutletContext()
  return (
    <div className="h-screen py-20 mt-4 " >
      <section className=" h-2/4 bg-cover bg-center grid p-4" style={{backgroundImage: `url("/images/hero1.jpg")`}}>
        <h1 className="text-white">Buy our beats</h1>
        <h2 className="text-white"> Our producers create the hottest, freshest, and hardest-hitting Sounds around.</h2>
      </section>
      <section className="h-2/5 bg-neutral-950">
        <h3 className="text-xl font-bold py-2 px-4 text-white">Genres</h3>
        <Carousel data={data} />
      </section>
      <section className="bg-neutral-950">
      <h4 className="text-xl font-bold py-2 px-4 text-white">Recently Updated Beats</h4>
        <BeatList data={data}/>
      </section>
      
      <PlanList />
      
    </div>
  )
}
