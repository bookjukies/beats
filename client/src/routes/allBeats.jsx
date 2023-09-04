import useGlobal from "../hooks/useGlobal";
import Beat from "../components/BeatItem";

function AllBeats() {
  const { data} = useGlobal();
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
            title={entry.title}
            type={entry.type}
          />
        ))
      ) : (
        <p>No beats found</p>
      )}
    </section>
  );
}

export default AllBeats;
