var mongoose = require("mongoose");

// Define the product schema
var productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Instock: {
        type: String,
        enum: ['Yes', 'No'], // Only allows 'Yes' or 'No'
        required: true
    }
});

// Export the model
module.exports = mongoose.model("Product", productSchema);
