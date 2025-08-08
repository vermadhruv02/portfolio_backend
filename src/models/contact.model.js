import {Schema, model} from "mongoose";


const contactModel = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,

    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = model("Contact", contactModel);
export default Contact;