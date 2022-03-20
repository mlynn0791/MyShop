import express from 'express'

import asyncHandler from 'express-async-handler'
import Products from '../models/productModel.js'


const router = express.Router()

//@desc  Fetch all products- what it does
// @route Get /api/products
//@acess Public
router.get('/', 
    asyncHandler (async (req, res) => {
    const products = await Products.find({})
    res.json(products)
}))

//@desc  Fetch single product by id- what it does
// @route Get /api/products/:id
//@acess Public

router.get('/:id', asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id)

    if (product){
    res.json(product)
    } else {
        res.status(404),json({message: 'Product not found'})
    }

}))

export default router