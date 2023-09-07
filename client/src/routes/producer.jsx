import { useParams } from "react-router-dom";
import useGlobal from "../hooks/useGlobal";
import Beat from "../components/BeatItem";
import { useMedia } from "../stores/mediaStore";

function Producer() {
  const { data } = useGlobal();
  const { id } = useParams();
  const beat = data.filter((entry) => entry.title === id);

  const {setPlayList} = useMedia()
  const handlePlayist = () =>{
    setPlayList(beat)
  }
  return (
    <div className="pt-28 bg-black text-white min-h-screen mt-4">
      <div className="grid w-screen px-4 gap-2">
        {beat.length ? (
          <img
            className="rounded-full w-28 justify-self-center "
            src={`/images/${beat[0].cover}`}
            alt=""
          />
        ) : (
          <div className="w-16 h-16 bg-neutral-700 rounded-full">.</div>
        )}
        <h1 className="text-center font-bold text-xl capitalize">{id}</h1>
      </div>

      <div className="px-4">
        <h2 className="text-center font-bold my-4 text-xl">Beats</h2>
        {beat.length > 0 ? (
          beat.map((entry) => (
            <Beat
              key={entry.name}
              name={entry.name}
              title={entry.title}
              price={entry.price}
              type={entry.type}
              cover={entry.cover}
              url={entry.url}
              modifyPlayList = {handlePlayist}
            />
          ))
        ) : (
          <p className="capitalize text-center font-bold my-2">
            {id} has no beats for sale
          </p>
        )}
      </div>
    </div>
  );
}

export default Producer;
