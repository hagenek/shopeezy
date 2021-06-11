import { action, createStore } from "easy-peasy";
import { Product } from "../constants/types";
import { StoreModel } from "./storeModel";

const storeModel: StoreModel = {
  drawerOpen: true,
  toggleDrawer: action((state, payload) => {
    state.drawerOpen = payload;
  }),
  product: {
    id: 10,
    name: "Handcrafted Steel Salad",
    description: "The Football Is Good For Training And Recreational Purposes",
    defaultImage: "http://placeimg.com/640/480/cats",
    images: [
      "http://placeimg.com/640/480/cats",
      "http://placeimg.com/640/480/cats",
      "http://placeimg.com/640/480/cats",
      "http://placeimg.com/640/480/cats",
    ],
    price: 94127.96,
    discount: 49,
  },
  setProduct: action((state, payload) => {
    state.product = payload;
  }),
  products: [
    {
      id: 10,
      name: "Handcrafted Steel Salad",
      description:
        "The Football Is Good For Training And Recreational Purposes",
      defaultImage: "http://placeimg.com/640/480/cats",
      images: [
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/cats",
        "http://placeimg.com/640/480/cats",
      ],
      price: 94127.96,
      discount: 49,
    },
  ],
  setProducts: action((state, payload) => {
    state.products = payload;
  }),
};

const store = createStore(storeModel);
export default store;
