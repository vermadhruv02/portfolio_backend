// /controllers/projects/find.js
import Project from "../../models/project.model.js";

export const find = async (req, res) => {
  try {
    const projectId = req.params.id;

    // Find the project by ID
    const project = await Project.findById(projectId);
    
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
      data: project,
    });
  } catch (error) {
    console.error("Error finding project:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
