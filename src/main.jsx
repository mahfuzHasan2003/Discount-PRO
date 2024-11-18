import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import BrandsDataProvider from "./provider/BrandsDataProvider";
import AuthDataProvider from "./provider/AuthDataProvider";

import "animate.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthDataProvider>
         <BrandsDataProvider>
            <RouterProvider router={routes} />
         </BrandsDataProvider>
      </AuthDataProvider>
   </StrictMode>
);
