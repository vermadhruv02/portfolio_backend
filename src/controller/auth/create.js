// /controllers/auth/create.js
import Auth from "../../models/auth.model.js";

export const create = async (req, res) => {
  try {
    const { username, password , secret } = req.body;

    // Check if username or password is missing
    if (!username || !password || !secret) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Username, password, and secret are required.",
      });
    }

    // Check if the username already exists
    const existingUser = await Auth.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Username already exists.",
      });
    }

    // Create a new user
    if (secret !== process.env.SECRET_KEY) {
      return res.status(403).json({
        status: 403,
        success: false,
        message: "Invalid secret.",
      });
    }
    const newUser = new Auth({ username, password });
    await newUser.save();

    res.status(201).json({
      status: 201,
      success: true,
      message: "User created successfully",
      data: { username: newUser.username }, // Don't send the password
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
