// /controllers/auth/update.js
import Auth from "../../models/auth.model.js";
import bcrypt from "bcryptjs";

export const update = async (req, res) => {
  try {
    const { username } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "New password is required.",
      });
    }

    // Find the user by username
    const user = await Auth.findOne({ username });

    if (!user) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "User not found",
      });
    }

    // Hash the new password and update the user
    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.status(200).json({
      status: 200,
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
