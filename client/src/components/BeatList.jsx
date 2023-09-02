import Beat from "./BeatItem";

function BeatList({ data }) {
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
        />
      ))}
    </section>
  );
}

export default BeatList;
