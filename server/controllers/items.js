const Item = require('../models/items');
const Bag_Item = require('../models/bagItems');

// Existing functions...

const addItems = async (req, res) => {
    try {        
        const item = await Item.create(req.body);
        res.status(201).json(item);
    } catch (error) {
        console.log("error occurred: /n", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const addToBag = async (req, res) => {
    try {        
        const bagItem = await Bag_Item.create(req.body);
        res.status(201).json(bagItem);
    } catch (error) {
        console.log("error occurred: /n", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const getInitialItems = async (req, res) => {
    try {
        const initialItems = await Item.find({});
        return res.status(200).json(initialItems);
    } catch (error) {
        console.log("error occurred: /n", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const getBagItems = async (req, res) => {
    try {
        const bagItems = await Bag_Item.find({});
        return res.status(200).json(bagItems);
    } catch (error) {
        console.log("error occurred: /n", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const deleteFromBag = async (req, res) => {
    try {
        const deletedBagItem = await Bag_Item.findOneAndDelete({ _id: req.params.id });
        return res.status(200).json(deletedBagItem);
    } catch (error) {
        console.log("error occurred: /n", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

const updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });
        return res.status(200).json(updatedItem);
    } catch (error) {
        console.log("error occurred: /n", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

// New search function
const searchItems = async (req, res) => {
    const query = req.query.q; // Get the search query from request
    try{
        // search for items in the database
        // const items = await Item.find({
        //     $or: [
        //         { item_name: { $regex: query, $options: 'i' } },
        //         { description: { $regex: query, $options: 'i' } },
        //     ],
        // });
        // console.log("Search results:", items); // Log the search results
        // res.status(200).json(items);
        // return everything for now

        const items = await Item.find({});
        res.status(200).json(items);
    }
    catch (error) {
        console.log("error occurred: /n", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

module.exports = {
    getInitialItems,
    getBagItems,
    addItems,
    addToBag,
    deleteFromBag,
    updateItem,
    searchItems,  // Make sure to include it here
};
