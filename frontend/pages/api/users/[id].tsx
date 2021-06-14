import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../constants/types";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id, name },
    method,
  } = req;

  switch (req.method) {
    case "GET":
      try {
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        const user: User = response.data;
        return res.status(200).json(user);
      } catch (error) {
        if (error.response != undefined) {
          return res.status(error.response.status).json(error.response.data);
        }
        return res.status(500).json(error?.errorInfo?.message);
      }
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
