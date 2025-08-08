import {Schema, model} from "mongoose";
import bcrypt from "bcryptjs";

const authSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {timestamps: true}); 

authSchema.pre("save", async function(next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
const Auth = model("Auth", authSchema);
export default Auth;