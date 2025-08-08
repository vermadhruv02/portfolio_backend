// /controllers/auth/find.js
import Auth from "../../models/auth.model.js";

export const find = async (req, res) => {
  try {
    const { username } = req.params;

    // Find user by username
    const user = await Auth.findOne({ username });

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      status: 200,
      success: true,
      data: { username: user.username }, // Don't send the password
    });
  } catch (error) {
    console.error("Error finding user:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
