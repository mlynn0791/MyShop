import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})

const productSchema = mongoose.Schema({
user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
},
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: trued
    },
    brand: {
        type: String,
        required: trued
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    rating: {
        type: Number, 
        required: trued,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

const Products = mongoose.model('Products', productSchema)
export default Products