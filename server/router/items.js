const express=require('express')
const router=express.Router();
const {getInitialItems,getBagItems,addItems,addToBag,deleteFormBag,updateItem} = require('../controllers/items')

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

module.exports = {router};