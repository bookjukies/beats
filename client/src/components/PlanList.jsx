import { useState } from "react";
import { Cross } from "./Icons";
import useGlobal from "../hooks/useGlobal";
import useCartStore from "../stores/cartStore";

const PlanList = () => {
  const { openPlan, setOpenPlan , toPurchase} = useGlobal();
  const [active, setActive] = useState("commercial");
  const addItem = useCartStore((store)=> store.addItem)
 

  const terms = [
    { id: 1, name: "basic", price: 300 },
    { id: 2, name: "commercial", price: 600 },
    { id: 3, name: "royalty", price: 1200 },
    // { id: 4, name: "exclusive", price: "Negotiate" },
  ];

  const handlePlanChange = (e) => {
    setActive(e.target.value);
  };

  const handleDialogClose = () => {
    setOpenPlan(false);
  };

  const activeTerm = terms.find((term) => term.name === active);

  const addToCartHandle = () =>{
    addItem({...toPurchase, price: activeTerm.price})
    setOpenPlan(false)
  }



  return (
    <dialog className="bg-white h-screen w-screen flex-col fixed top-0 z-50" open={openPlan}>
      <div className="grid grid-cols-10 bg-black text-white px-4 py-2">
        <h1 className="col-span-9 font-bold text-lg">Choose plan</h1>
        <button className="" onClick={handleDialogClose}>
          <Cross />
        </button>
      </div>

      <form onChange={handlePlanChange}>
        <fieldset>
          <legend className="px-4 hidden">Please select your preferred Licensing Plan</legend>
          <div className="grid grid-cols-2 gap-2 w-full p-4 grid-rows-2">
            {terms.map((term) => (
              <div
                key={term.id}
                className={`w-full grid grid-cols-1 border-2 rounded-lg ${
                  active === term.name ? "bg-sky-400 border-blue-500" : ""
                }`}
              >
                <input type="radio" id={term.name} name="plan" value={term.name} className="hidden" />
                <label htmlFor={term.name} className="py-2 px-1">
                  {/* <span className="block">{term.name}</span> <span className="">{term.price === "Negotiate" ? term.price : `R${term.price}`}</span> */}
                  <span className="block">{term.name}</span> <span className="">{`R ${term.price}`}</span>
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </form>

      <details className="px-4 my-2">
        <summary>Plan terms</summary>
        <div>
          {terms.filter((term) => term.name === active).map((entry) => (
            <p key={entry.name}>{entry.name}</p>
          ))}
        </div>
      </details>

      <div className="grid grid-col-1 px-4 gap-2">
        {/* <p>Total : {activeTerm.price === "Negotiate" ? activeTerm.price : `R${activeTerm.price}`}</p> */}
        <p>Total : {`R ${activeTerm.price}`}.00</p>
        <button className="bg-blue-600 text-white py-2" onClick={addToCartHandle}>Add to Cart</button>
      </div>
    </dialog>
  );
};

export default PlanList;
