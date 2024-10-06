const express=require('express')
const router=express.Router();
const {getInitialItems,getBagItems,addItems,addToBag,deleteFormBag,updateItem, getSingleProduct} = require('../controllers/items')

//initial items
router.get('/items', getInitialItems)

//update item
router.route("/items/:id").patch(updateItem)

//bag items
router.get('/bag-items', getBagItems)

//add items
router.post('/add-items', addItems)

//add to bag
router.post('/add-to-bag', addToBag)

//delete and update from bag
router.route("/bag-items/:id").delete(deleteFormBag)

// Geting A Single Product
router.get("/get-product/:id",getSingleProduct)

module.exports = {router};