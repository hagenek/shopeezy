import { Action, Store } from "easy-peasy";
import { Product, Products } from "../constants/types";

export interface StoreModel {
  drawerOpen: boolean;
  toggleDrawer: Action<StoreModel, boolean>;
  product: Product;
  setProduct: Action<StoreModel, Product>;
  products: Products;
  setProducts: Action<StoreModel, Products>;
}
