import { action, createStore } from "easy-peasy";
import { Product, User, Products } from "../constants/types";
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
  ] as Products,
  setProduct: action((state, payload) => {
    state.product = payload;
  }),
  setProducts: action((state, payload) => {
    state.products = payload;
  }),
  user: {
    orders: [
      {
        id: 1,
        products: [
          {
            id: 724,
            quantity: 9,
          },
        ],
      },
      {
        id: 2,
        products: [
          {
            id: 871,
            quantity: 2,
          },
          {
            id: 607,
            quantity: 2,
          },
        ],
      },
    ],
    id: 2,
    name: {
      firstName: "Mathew",
      lastName: "Dach",
    },
    phone: "766.978.3887 x23500",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg",
    email: "Zola38@gmail.com",
    address: {
      country: "Solomon Islands",
      city: "West Reggietown",
      zip: "21848-6302",
      street: "4646 Kyleigh Corners",
    },
    role: "CUSTOMER",
  },
  setUser: action((state, payload) => {
    state.user = payload;
  }),
  cart: {
    id: 4,
    products: [
      {
        id: 513,
        quantity: 6,
      },
      {
        id: 274,
        quantity: 10,
      },
    ],
  },

  setCart: action((state, payload) => {
    state.cart = payload;
  }),
};

const store = createStore(storeModel);
export default store;
