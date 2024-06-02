const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    stars: {
        type: Number,
        default: 0
    },
    count: {
        type: Number,
        default: 0
    }
})

const bagItemsSchema = new mongoose.Schema({
    image: {
        type: String,
        required: [true, "image must be provided"],
        trim: true
    },
    company: {
        type: String,
        required: [true, "company name must be provided"],
        trim: true
    },
    item_name: {
        type: String,
        required: [true, "item name must be provided"],
        trim: true
    },
    sold_by: {
        type: String,
        required: [true, "sold by must be provided"],
        trim: true
    },
    original_price: {
        type: Number,
        required: [true, "original price must be provided"],
    },
    current_price: {
        type: Number,
        required: [true, "current price must be provided"],
    },
    discount_percentage: {
        type: Number,
        required: [true, "discount percentage must be provided"],
    },
    return_period: {
        type: Number,
        required: [true, "return_period must be provided"],
    },
    delivery_date: {
        type: Date,
        required: [true, "delivery date must be provided"],
    },
    quantity: {
        type: Number,
        required: [true, "quantity must be provided"],
    },
    size: {
        type: Number,
        required: [true, "size must be provided"],
    },
    wishlist: {
        type: Boolean,
        default: false
    },
    add_to_bag: {
        type: Boolean,
        default: false
    },
    rating: {
        type: ratingSchema
    }
})

module.exports = mongoose.model('bag_item',bagItemsSchema)