import {
  createContext,
  useState,
  useContext,
  useEffect,
  type ReactNode,
} from "react";

type User = {
  name: string;
  email?: string;
} | null;

type Cart = Record<number, number>; // { [id]: quantidade }

type UserContextType = {
  user: User;
  login: (name: string, email?: string) => void;
  logout: () => void;
  loading: boolean;
  cart: Cart;
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  getTotalItems: () => number;
};

type Props = {
  children: ReactNode;
};

const UserContext = createContext<UserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  loading: false,
  cart: {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalItems: () => 0,
});

export function UserProvider({ children }: Props) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<Cart>({});

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  const addToCart = (productId: number) => {
    setCart((prev) => {
      const updated = { ...prev, [productId]: (prev[productId] || 0) + 1 };
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[productId]) {
        updated[productId] -= 1;
        if (updated[productId] <= 0) delete updated[productId];
      }
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const getTotalItems = () =>
    Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const login = async (name: string, email?: string) => {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 800));
      setUser({ name, email });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setCart({});
    localStorage.removeItem("cart");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        cart,
        addToCart,
        removeFromCart,
        getTotalItems,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
