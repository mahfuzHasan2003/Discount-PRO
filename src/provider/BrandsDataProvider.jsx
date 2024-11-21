import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const BrandsContext = createContext();

const BrandsDataProvider = ({ children }) => {
   const [allBrandsData, setAllBrandsData] = useState([]);
   const [isSaleOn, setIsSaleOn] = useState([]);
   const [topRated, setTopRated] = useState([]);
   useEffect(() => {
      axios.get("/data.json").then((data) => setAllBrandsData(data.data));
   }, []);
   useEffect(() => {
      setIsSaleOn(allBrandsData.filter((brnad) => brnad.isSaleOn));
      setTopRated(allBrandsData.filter((brnad) => brnad.rating >= 4.5));
   }, [allBrandsData]);

   const allData = { allBrandsData, setAllBrandsData, isSaleOn, topRated };
   return (
      <BrandsContext.Provider value={allData}>
         {children}
      </BrandsContext.Provider>
   );
};

export default BrandsDataProvider;
