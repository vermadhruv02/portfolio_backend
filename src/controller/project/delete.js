// /controllers/projects/delete.js
import Project from "../../models/project.model.js";

export const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;

    // Find the project by ID and delete it
    const project = await Project.findByIdAndDelete(projectId);

    if (!project) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
