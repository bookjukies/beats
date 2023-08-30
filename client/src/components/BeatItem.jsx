import { Link, useNavigate } from "react-router-dom";
import useGlobal from "../hooks/useGlobal";
import { useMedia } from "../stores/mediaStore";
import { CartIcon } from "./Icons";

function Beat({ name, title, price, type }) {
  const { setOpenPrice } = useGlobal();
  const play = useMedia((state) => state.play);
  const navigate = useNavigate();

  const handlePlay = () => {
    play("king");
  };

  const handleAddToCart = () => {
    setOpenPrice(true);
  };

  return (
    <div className="grid grid-cols-10 h-16 bg-yellow-400 my-2">
      <div className="col-span-2 bg-slate-400 h-16 w-16 rounded-xl" onClick={handlePlay}>
        {/* Display image */}
      </div>
      <div className="col-span-6 text-sm px-1">
        <Link to={`/beat/${name}`} className="block">
          {name}
        </Link>
        <Link to={`/producer/${title}`} className="block">
          {title}
        </Link>
        <Link to={`/type/${type}`} className="block">
          {type}
        </Link>
      </div>
      <div className="col-span-2">
        <div className="">
          <button onClick={handleAddToCart}>
            <CartIcon />
          </button>
        </div>
        <div className="">R {price}.00</div>
      </div>
    </div>
  );
}

export default Beat;
