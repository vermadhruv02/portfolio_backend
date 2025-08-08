// /controllers/projects/update.js
import Project from "../../models/project.model.js";

export const update = async (req, res) => {
  try {
    const projectId = req.params.id;
    const {
      title,
      details,
      category,
      liveLink,
      sourceCode,
      image,
      avatar,
      tags,
      backendSourceCode,
      longDetails,
      author,
    } = req.body;

    // Find the project by ID
    const project = await Project.findById(projectId);
    
    if (!project) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Project not found",
      });
    }

    // Update the project fields
    project.title = title || project.title;
    project.details = details || project.details;
    project.category = category || project.category;
    project.liveLink = liveLink || project.liveLink;
    project.sourceCode = sourceCode || project.sourceCode;
    project.image = image || project.image;
    project.avatar = avatar || project.avatar;
    project.tags = tags || project.tags;
    project.backendSourceCode = backendSourceCode || project.backendSourceCode;
    project.longDetails = longDetails || project.longDetails;
    project.author = author || project.author;

    // Save the updated project
    await project.save();

    res.status(200).json({
      status: 200,
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
