import User from "../../../models/User";
import dbConnect from "../../../lib/dbConnect";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  await dbConnect();

  const body = req.body;
  // check if the user already registered
  const user = await User.findOne({ email: body.email });

  if (user) {
    res.status(400).json({ message: "User already exists." });
    // below code should be unreachable in this case
    return;
  }

  try {
    const newUser = await new User(body);
    // bcrypt
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    newUser.passwordConfirm = await bcrypt.hash(newUser.passwordConfirm, salt);
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

export default handler;
