import useGlobal from "../hooks/useGlobal";
import Beat from "../components/BeatItem";
import { useMedia } from "../stores/mediaStore";

function AllBeats() {
  const { data} = useGlobal();


  const {setPlayList} = useMedia()
  const handlePlayist = () =>{
    setPlayList(data)
  }

  return (
    <section className="pt-28 bg-neutral-950 min-h-screen text-white px-4">

    <h1 className="text-center text-xl font-bold"> All Beats</h1>

      {data.length > 0 ? (
        data.map((entry) => (
          <Beat
            key={entry.name}
            name={entry.name}
            price={entry.price}
            cover={entry.cover}
            producer={entry.producer}
            type={entry.type}
            url = {entry.url}
            modifyPlayList = {handlePlayist}
          />
        ))
      ) : (
        <p>No beats found</p>
      )}
    </section>
  );
}

export default AllBeats;
