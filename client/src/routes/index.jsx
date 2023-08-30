
import { useOutletContext } from "react-router-dom"
import PlanList from "../components/PlanList"
import BeatList from "../components/BeatList"
import Carousel from "../components/Carousel"




export default function Index() {
  
  const data = useOutletContext()
  return (
    <div className="h-screen px-4 py-20">
      <section className=" bg-yellow-400 h-2/5">
        <h1>Buy our beats</h1>
        hero section
      </section>
      <section className="h-2/5 bg-blue-300 ">
        <h2>Recently Updated Beats</h2>
        <Carousel data={data} />
      </section>
      <BeatList data={data}/>
      <PlanList />
      
    </div>
  )
}
