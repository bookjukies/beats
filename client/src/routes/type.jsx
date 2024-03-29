import { useParams } from "react-router-dom";
import useGlobal from "../hooks/useGlobal";
import Beat from "../components/BeatItem";
import { useMedia } from "../stores/mediaStore";
function Type() {
  const { tag } = useParams();
  const { data } = useGlobal();

  const types = data.filter((beat) => beat.type === tag);

  const {setPlayList} = useMedia()
  const handlePlayist = () =>{
    setPlayList(types)
  }
  
  return (
    <div className="pt-28 bg-neutral-950 min-h-screen text-white px-4">
      <h1 className="text-center text-xl font-bold"> All <span className="capitalize">{tag}</span> Beats</h1>

      {types.length > 0 ? (
        types.map((type) => (
          <Beat
            key={type.name}
            name={type.name}
            price={type.price}
            producer={type.producer}
            cover={type.cover}
            url={type.url}
            modifyPlayList = {handlePlayist}
          />
        ))
      ) : (
        <p className="text-center my-4 font-bold">No <span className="capitalize">{tag}</span> beats found</p>
      )}
    </div>
  );
}

export default Type;
