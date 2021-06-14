import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Products } from "../../../constants/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        let response = await axios.get("http://localhost:8080/products");
        let products: Products = response.data;
        return res.status(200).json(products);
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
