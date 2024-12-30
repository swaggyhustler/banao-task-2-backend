import User from '../Models/user.model.js';
import { passwordEncoder, comparePassword } from '../Utils/auth.util.js';

const register = async (req, res) =>{

    const {first_name, last_name, email, password} = req.body;
    const encodedPassword = await passwordEncoder(password);

    try{
        const newUser = new User({first_name, last_name, email, password: encodedPassword});
        await newUser.save();
        return res.status(201).json({message: "User registered successfully", success: true});
    }catch(e){
        return res.status(500).json({message: "Cannot register user", success: false});
    }

}

const login = async (req, res) => {

    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user)
            return res.status(404).json({message: "User not found", success: true});
        const result = await comparePassword(password, user.password);
        if(result)
            return res.status(200).json({message: "User is authenticated", success: true, authenticatedUser: true});
        else
            return res.status(200).json({message: "User is not authenticated", success: true, authenticatedUser: false});
    }catch(e){
        return res.status(500).json({message: "Cannot perform login", success: false}); 
    }

}

export {register, login};