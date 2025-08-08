import Project from "../../models/project.model.js";

export const create = async (req, res) => {
  try {
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
      author, // Make sure `author` is included in the destructuring
    } = req.body;
    console.log("Creating a new project with data:", req.body);
    
    // Validate required fields
    if (
      !title ||
      !details ||
      !category ||
      !author || // Check if author is provided
      !sourceCode ||
      !image ||
      !avatar ||
      !tags
    ) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Format tags: Remove any leading/trailing spaces
    const formattedTags = tags
      .toLowerCase()
      .split(",")
      .map(tag => tag.trim());

    // Create and save project
    const project = new Project({
      title,
      details,
      category,
      author,
      liveLink,
      sourceCode,
      image,
      avatar,
      tags: formattedTags,
      backendSourceCode,
      longDetails,
    });

    await project.save();

    // Send success response
    res.status(201).json({
      status: 201,
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({
      status: 500,
      success: false,
      message: "Internal server error",
    });
  }
};
