import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { routes } from "./Route/Route";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./Utils/Provider/CartProvider";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </QueryClientProvider>
  </StrictMode>
);
