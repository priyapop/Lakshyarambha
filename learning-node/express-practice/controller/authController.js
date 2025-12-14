import User from "../model/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "pineapple";

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "Email already used" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      password: hashedPassword,
      email,
    });
    //res.json({user: { id: newUser?._id, email: newUser?.email } });
     const token = jwt.sign(
      { id: newUser._id },
      JWT_SECRET,
      { expiresIn: "1h" }
    )
     res.json({
      message: "Registration successful",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({
      token,
      message: "Authentication successful",
      user: { id: user._id, email: user.email ,name: user.name},
    });
  } catch (error) {
    console.log(error);
  }
};
