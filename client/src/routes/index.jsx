import { useOutletContext, Link } from "react-router-dom";
import PlanList from "../components/PlanList";
import BeatList from "../components/BeatList";
import Carousel from "../components/Carousel";

export default function Index() {
  const data = useOutletContext();
  return (
    <div className="h-screen py-20 mt-4 ">
      <section
        className=" h-[300px] md:h-screen bg-cover bg-center grid p-4"
        style={{ backgroundImage: `url("/images/hero1.jpg")` }}
      >
        <div className="self-end grid gap-4">
          <h2 className="text-white text-center font-semibold text-lg">
            {" "}
            Our producers create the hottest, freshest, and hardest-hitting
            Sounds around
          </h2>
          <button className="text-white bg-sky-400 w-3/4 self-center justify-self-center py-2 text-lg font-bold rounded">
            Listen
          </button>
        </div>
      </section>
      <section className="h-[200px] bg-neutral-950">
        <h3 className="text-xl font-bold py-2 px-4 text-white">
          Recently Updated Beats
        </h3>
        <Carousel data={data} />
      </section>
      <section className="bg-neutral-950 grid py-4 ">
        <h4 className="text-xl font-bold px-4 text-white ">HOT</h4>
        <BeatList data={data} />
        <Link className="text-white text-center px-4 justify-self-center bg-sky-400 py-2 w-3/4 rounded font-bold">
          All Beats
        </Link>
      </section>
      <section className="text-white bg-black px-4 pb-12">
        <h4 className="text-xl font-bold py-4">Genres</h4>
        <div className="grid grid-cols-2 text-center gap-4">
          <Link className="block bg-neutral-900 py-4 rounded">Hip-Hop</Link>
          <Link className="block bg-neutral-900 py-4 rounded">RNB</Link>
          <Link className="block bg-neutral-900 py-4 rounded">Afro-beats</Link>
          <Link className="block bg-neutral-900 py-4 rounded">Trap</Link>
        </div>
      </section>
      <PlanList />
    </div>
  );
}
