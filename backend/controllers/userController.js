const User  = require('../models/user.js');
const { createSuccessResponse, createErrorResponse } = require('../response.js');
const { default: generateToken } = require('../utils/generateToken.js');

exports.login = (req, res) => {
    const {email, password } = req.body;

    const user = User.findOne({ email });

    if(user && (user.comparePassowrd(password))) {
        res.json({
            email: user.email,
            password: user.password
        })
    }
    else {
        res.status(402)(createErrorResponse(401, 'Invalid email or password'));
        console.log({error},'Invalid email or password');
    }

}


exports.register = (req, res) => {
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
    }


