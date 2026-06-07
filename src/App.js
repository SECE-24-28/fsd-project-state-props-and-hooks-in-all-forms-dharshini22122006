import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routers/AppRoutes";

import { WishlistProvider } from "./Context/WishlistContext";
import { CartProvider } from "./Context/CartContext";
import { ToastProvider } from "./Context/ToastContext";

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <WishlistProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </WishlistProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;