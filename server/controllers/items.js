const Item = require("../models/items.js");
const Bag_Item = require("../models/bagItems.js");

const addItems = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) {
    console.log("error occured : /n", error);
  }
};

const addToBag = async (req, res) => {
  try {
    // console.log(req.body)
    const bagItem = await Bag_Item.create(req.body);
    res.status(201).json(bagItem);
  } catch (error) {
    console.log("error occured : /n", error);
  }
};

const getInitialItems = async (req, res) => {
  try {
    const initialItems = await Item.find({});
    return res.status(200).json(initialItems);
  } catch (error) {
    console.log("error occured : /n", error);
  }
};

const getBagItems = async (req, res) => {
  try {
    const bagItems = await Bag_Item.find({});
    return res.status(200).json(bagItems);
  } catch (error) {
    console.log("error occured : /n", error);
  }
};

const deleteFormBag = async (req, res) => {
  try {
    // console.log(req.params)
    const deletedBagItem = await Bag_Item.findOneAndDelete({
      _id: req.params.id,
    });
    return res.status(200).json(deletedBagItem);
  } catch (error) {
    console.log("error occured : /n", error);
  }
};

const updateItem = async (req, res) => {
  try {
    // console.log(req.params)
    const updatedItem = await Item.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    return res.status(200).json(updatedItem);
  } catch (error) {
    console.log("error occured : /n", error);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Item.findById(id);
    return res.status(200).json({ success: true, product });
  } catch (error) {
    console.log("error occured :/n get a product Item :/n", error);
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  getInitialItems,
  getBagItems,
  addItems,
  addToBag,
  deleteFormBag,
  updateItem,
  getSingleProduct,
};
