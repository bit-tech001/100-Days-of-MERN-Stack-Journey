import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  try {
    const token = req.cookies.token; // ✅ FIXED

    if (!token) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
