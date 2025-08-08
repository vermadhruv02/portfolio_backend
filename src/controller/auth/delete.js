// /controllers/auth/delete.js
import Auth from "../../models/auth.model.js";

export const deleteAuth = async (req, res) => {
  try {
    const { username } = req.params;

    // Find and delete the user
    const user = await Auth.findOneAndDelete({ username });

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
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
