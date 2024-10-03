const mongoose = require('mongoose')

// const connectionString ="mongodb+srv://anuj:1234@cluster0.0hqyp.mongodb.net/myntra?retryWrites=true&w=majority"

const connectDB=(url)=>{
    return mongoose.connect(url)
}

module.exports = {connectDB};