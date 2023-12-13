const User = require('../models/User');
require('dotenv').config();
const bcrypt = require('bcrypt');



exports.getUser = async (req, res) => {
    try{
        console.log('req.user', req.body);
        const {name, email, password, role} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message: 'User Already Exists',
            });
        }
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password, 10);
        }catch(err){
            return res.status(500).json({
                success: false,
                message: 'Error in hashing password',
            });
        }
        console.log(hashedPassword);
        let user = await User.create({
            name, email, password: hashedPassword, role
        });

        return res.status(200).json({
            success : true,
            message : "User Created Successfully",
            data : user
        });

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};