import { useContext } from "react";
import { Data } from "../context/DataContext";

const useData = ()=>{ return useContext(Data) };

export default useData;