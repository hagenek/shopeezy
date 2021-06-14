export type Product = {
  id: number;
  name: string;
  description: string;
  defaultImage: string;
  images: string[];
  price: number;
  discount: number;
};

export type Products = Product[];

export type CartItem = {
  id: number;
  quantity: number;
};

export type Order = {
  id: number;
  products: CartItem[];
};

export type Address = {
  country: string;
  city: string;
  zip: string;
  street: string;
};

export type User = {
  orders: Order[];
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  avatar: string;
  email: string;
  address: Address;
  role: string;
};

export type Cart = {
  id: number;
  products: CartItem[];
};
