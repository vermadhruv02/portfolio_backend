import Contact from "../../models/contact.model.js";

export const create = async (req, res) => {
  try {
    const { firstName, lastName, phone, email, message } = req.body;
    console.log("Creating a new contact with data:", req.body);

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Create a new contact
    const newContact = new Contact({
      firstName,
      lastName,
      phone,
      email,
      message,
    });

    await newContact.save();
    return res.status(201).json({
        status: 201,
        success: true,
      message: "Contact created successfully",
      contact: newContact,
    });

  } catch (error) {
    console.error("Error creating contact:", error);
    return res.status(500).json({
        status: 500,
        success: false,
        error: "An error occurred while creating the contact",
    });
  }
};