import User from "../../../models/User";
import dbConnect from "../../../lib/dbConnect";
import bcrypt from "bcryptjs";

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

  // update user
  if (method === "PUT") {
    try {
      if(req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        req.body.passwordConfirm = await bcrypt.hash(req.body.passwordConfirm, 10);
      }
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(`Error:  ${(error, error.status)}`);
    }
  }
};

export default handler;
