import { Link, useNavigate } from "react-router-dom";
import useGlobal from "../hooks/useGlobal";
import { useMedia } from "../stores/mediaStore";
import { CartIcon } from "./Icons";

function Beat({ name, title, price, type, cover }) {
  const { setOpenPlan , setToPurchase} = useGlobal();
  const play = useMedia((state) => state.play);
  const navigate = useNavigate();

  const handlePlay = () => {
    play("king");
  };

  const handleAddToCart = () => {
    setOpenPlan(true);
    setToPurchase({name, title, price})
  };

  return (
    <div className="grid grid-cols-10 h-16 my-3 text-white gap-2 bg-neutral-900 rounded-xl">
      <div className="col-span-2 h-full rounded-xl grid" onClick={handlePlay}>
        <img
          className="rounded-xl self-center md:h-16"
          src={`/images/${cover}`}
          alt=""
        />
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
