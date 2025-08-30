import User from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      users,
      message: "Users Fetched Successfully",
      total: users.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const createDate = new Date().toUTCString();
    const user = await User.insertOne({
      username,
      email,
      role,
      password,
      createDate,
    });
    if (user._id) {
      res
        .status(201)
        .json({ success: true, user, message: "User Created Successfully" });
    } else {
      res.status(400).json({ success: false, message: "User not Created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateUser = async (req, res) => {
  const updatedAt = new Date().toUTCString();
  const { username, password, role, email } = req.body;

  try {
    const result = await User.updateOne({
      username,
      password,
      role,
      email,
      updatedAt,
    });
    if (acknowledged) {
      res.status(200).json({ message: "Data Updated Successfully" });
    }
    console.log(result);
  } catch (error) {
    console.log("Update API Error", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await User.findByIdAndDelete(id);
    console.log(result);
  } catch (error) {
    console.log("Delete API Error", error);
    res.status(500).json({ message: "Server Error" });
  }
};
