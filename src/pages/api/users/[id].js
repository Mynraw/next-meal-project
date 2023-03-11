import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";

export const handler = async (req, res) => {
  await dbConnect();

  const {
    method,
    // get user id from query
    query: { id },
  } = req;

  // find user
  if (method === "GET") {
    try {
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (error) {
      console.log(`Error:  ${(error, error.status)}`);
    }
  }
};

export default handler;
