import { useContext } from "react";

import GlobalContext from "../context/GlobalContext";

const useGlobal = () => useContext(GlobalContext)

export default useGlobal