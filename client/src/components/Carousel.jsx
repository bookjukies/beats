

function Carousel({data}) {
  return (
    <div className=" h-full flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-5 px-5 no-scrollbar">
          {data.map(entry => <div key={entry.name} className=" h-3/4 flex-none snap-always snap-center">
            {/* <p>{entry.name}</p> */}
            <img className="h-full" src={`/images/${entry.cover}`} alt="" />
          </div>)}
    </div>
  )
}

export default Carousel