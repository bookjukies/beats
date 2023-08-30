import Beat from "./BeatItem"

function BeatList({data}) {
  return (
    <section className="pb-12">
    {data.map(entry => <Beat key={entry.name} name={entry.name} title={entry.title} price={entry.price} type={entry.type}/>)}
  </section>
  )
}

export default BeatList