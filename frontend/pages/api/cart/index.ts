import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "../../constants/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        let response = await axios.get("http://localhost:8080/cart");
        let products: Products = response.data;
        return res.status(200).json(products);
      } catch (error) {
        if (error.response != undefined) {
          return res.status(error.response.status).json(error.response.data);
        }
        return res.status(500).json(error?.errorInfo?.message);
      }
    case "POST":
      try {
        let response = await axios.post("http://localhost:8080/cart", {
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
        });

        res.status(200).json(response.data);
      } catch (error) {
        if (error.response != undefined) {
          return res.status(error.response.status).json(error.response.data);
        }
        return res.status(500).json(error?.errorInfo?.message);
      }
    default:
      return res.status(500).json({ error: "Unexpected error." });
  }
};

export default handler;
