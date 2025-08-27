import Category from "../model/category.js";
import User from "../model/category.js";

export const createCategory = async (req, res) => {
  try {
    const { title } = req.body;
    const existingCategory = await Category.findOne({ title });
    if (existingCategory) {
      return res
        .status(400)
        .json({ error: "Category with this title already exists" });
    }
    const category = await Category.create({ title });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getCategoriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Category.findById(id);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
