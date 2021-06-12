import { Action, Store } from "easy-peasy";
import { Product, Products, User } from "../constants/types";

export interface StoreModel {
  drawerOpen: boolean;
  toggleDrawer: Action<StoreModel, boolean>;
  product: Product;
  setProduct: Action<StoreModel, Product>;
  products: Products;
  setProducts: Action<StoreModel, Products>;
  user: User;
  setUser: Action<StoreModel, User>;
}
