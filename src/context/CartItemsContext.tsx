import { createContext, ReactNode, useState } from "react";
import { displayProductDTO } from "../interfaces/displayProductDTO";

interface CartItemsContextProviderProps {
  children: ReactNode;
}

export const CartItemsContext = createContext<{
  cartItems: displayProductDTO[];
  setCartItems: React.Dispatch<React.SetStateAction<displayProductDTO[]>>;
} | null>(null);

export default function CartItemsContextProvider({
  children,
}: CartItemsContextProviderProps) {
  const [cartItems, setCartItems] = useState<displayProductDTO[]>([]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
}
