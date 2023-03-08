import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";

const handler = async (req, res) => {
  await dbConnect();

  const { method } = req;

  // find user
  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(`Error:  ${(error, error.status)}`);
    }
  }

  // create user
  if (method == "POST") {
    try {
      const newUser = await User.create(req.body);
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;
