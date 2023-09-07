import { Link} from "react-router-dom";
import useGlobal from "../hooks/useGlobal";
import { useMedia } from "../stores/mediaStore";
import { CartIcon, PlayIcon, PauseIcon } from "./Icons";


function Beat({ name, title, price, type, cover, url, modifyPlayList }) {
  const { setOpenPlan, setToPurchase , audioSourceRef} = useGlobal();
  const { play, playing, isPlaying, resume, pause, isPaused } = useMedia();


  

  
  const handlePlay = () => {

    modifyPlayList();
    play({ url, title, name });
    
    if(playing?.name === name){
      if(isPaused){
        
        handleResume()
       
      }else{
        handlePause()
      }
    }
  };

  function handlePause () {
    pause(audioSourceRef)
  }

  function handleResume () {
    resume(audioSourceRef)
  }

  const handleAddToCart = () => {
    setOpenPlan(true);
    setToPurchase({ name, title });
  };

  return (
    <div className="grid grid-cols-10 h-18 py-1 my-3 text-white gap-2 bg-neutral-900 rounded-xl">
      <div
        className="col-span-2 h-full rounded-xl grid  bg-center bg-cover content-center justify-center"
        style={{ backgroundImage: `url("/images/${cover}")` }}
        onClick={handlePlay}
      >
        <div className="bg-over p-1 rounded-full">
          { isPlaying? (playing?.name === name ? <PauseIcon /> : <PlayIcon />) : <PlayIcon /> }
        </div>
      </div>
      <div className="col-span-6 text-sm px-2 grid">
        <Link
          to={`/beat/${name}`}
          state={{ name, title, price, type, cover }}
          className="block font-bold text-xl capitalize overflow-x-hidden whitespace-nowrap"
        >
          {name}
        </Link>

        <div className="grid grid-cols-10 self-end gap-2 text-lg">
          <div className="font-bold whitespace-nowrap col-span-4 overflow-x-hidden">
            R {price}
          </div>
          <Link
            to={`/producer/${title}`}
            className="block capitalize h-full overflow-x-hidden whitespace-nowrap text-base col-span-6"
          >
            {title}
          </Link>
        </div>
      </div>
      <div className="col-span-2 grid content-center">
        <div className="justify-self-center ">
          <button
            className="bg-sky-400 p-2 rounded-full"
            onClick={handleAddToCart}
          >
            <CartIcon />
          </button>
        </div>
        {/* <div className="justify-self-center">R {price}.00</div> */}
      </div>
    </div>
  );
}

export default Beat;
