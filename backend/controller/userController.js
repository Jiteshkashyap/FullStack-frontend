import { userModel } from "../model/userModel.js";



export const getAllUsers = async (req, res) => {

  try {

    const users = await userModel.find().select("-password")

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};
