import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config({ path: "./backend/.env" });

const createAdmin = async () => {
  try {
    await connectDB();

    const email = "aishwaryaaishuhs2004@gmail.com";
    const password = "Aishwarya@123";

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log("Admin created successfully.");
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    process.exit(0);
  } catch (error) {
    console.error("Failed to create admin:", error);
    process.exit(1);
  }
};

createAdmin();