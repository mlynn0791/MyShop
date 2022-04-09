import bcryptjs from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import Users from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

// @desc  Auth user & get token
// @route POST /api/users/login
// @access Public

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await Users.findOne({email})

    if (user && (bcryptjs.compare(password, user.password))
    ) {
        return res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password');
    }
})

export {authUser}