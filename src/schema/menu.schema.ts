import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
})

const MenuCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  items: { type: [MenuItemSchema], required: true },
})

const MenuCategory = mongoose.model("MenuCategory", MenuCategorySchema);

export default MenuCategory;
