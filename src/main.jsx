import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import BrandsDataProvider from "./provider/BrandsDataProvider";
import AuthDataProvider from "./provider/AuthDataProvider";
import "@smastrom/react-rating/style.css";
import { Toaster } from "react-hot-toast";

import "animate.css";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <AuthDataProvider>
         <BrandsDataProvider>
            <RouterProvider router={routes} />
            <Toaster position='bottom-center' reverseOrder={false} />
         </BrandsDataProvider>
      </AuthDataProvider>
   </StrictMode>
);
