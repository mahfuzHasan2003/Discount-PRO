import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const BrandsContext = createContext();

const BrandsDataProvider = ({ children }) => {
   const [allBrandsData, setAllBrandsData] = useState([]);
   const [isSaleOn, setIsSaleOn] = useState([]);
   useEffect(() => {
      axios.get("/data.json").then((data) => setAllBrandsData(data.data));
   }, []);
   useEffect(
      () => setIsSaleOn(allBrandsData.filter((brnad) => brnad.isSaleOn)),
      [allBrandsData]
   );
   const allData = { allBrandsData, setAllBrandsData, isSaleOn };
   return (
      <BrandsContext.Provider value={allData}>
         {children}
      </BrandsContext.Provider>
   );
};

export default BrandsDataProvider;
