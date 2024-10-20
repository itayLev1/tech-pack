import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  // Create a JWT token set for 30 days and store it in env file
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // Store JWT token in a file (can also be saved in local storage but less secure)
  // Set JWT as HTTP only cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 100, // 30 days (this property is in ms)
  })
}

export default generateToken;