import User from "../models/user.js";
import { createSuccessResponse, createErrorResponse } from '../response.js';

const login = (req, res) => {
    const {email, password } = req.body;

    const user = User.findOne({ email });

    if(user && (user.comparePassowrd(password))) {
        res.json({
            _id: user._id,
            email: user.email,
            password: user.password
        })
    }
    else {
        res.status(402)(createErrorResponse(401, 'Invalid email or password'));
        console.log({error},'EInvalid email or password');
    }

}


const register = (req, res) => {
    User.register(
        new User({ 
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            city: req.body.city,
            province: req.body.province,
            postalCode: req.body.postalCode,
            country: req.body.country
        }), req.body.password,
        function (error) {
            if (error) {
                res.status(402).json(createErrorResponse(401, 'Error creating a user'));
                console.log({error},'Error creating a user');
            } else {
                res.status(201).json(createSuccessResponse({message: 'User is successfully registered'}));
                console.log('Register function: success');
            }
        }
    );
};

export { register, login };