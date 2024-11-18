import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import BrandsDataProvider from "./provider/BrandsDataProvider";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <BrandsDataProvider>
         <RouterProvider router={routes} />
      </BrandsDataProvider>
   </StrictMode>
);
