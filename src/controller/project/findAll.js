// /controllers/projects/findAll.js
import Project from "../../models/project.model.js";

export const findAll = async (req, res) => {
  try {
    // Fetch all projects
    const projects = await Project.find();

    res.status(200).json({
      status: 200,
      success: true,
      project: projects,
      message:	"Project fetching successfully!",
      count: projects.length,
    });
  } catch (error) {
    console.error("Error finding projects:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
