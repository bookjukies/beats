import Beat from "./BeatItem";
import { useMedia } from "../stores/mediaStore";

function BeatList({ data }) {

  const {setPlayList} = useMedia()

  const handlePlayist = () =>{
    setPlayList(data)
  }

  return (
    <section className="pb-4 px-4">
      {data.map((entry) => (
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
      ))}
    </section>
  );
}

export default BeatList;
