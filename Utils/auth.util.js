import bycrypt from 'bcryptjs';

const passwordEncoder = async (password) => {
    try{
        let saltRounds = 10;
        const hash = await bycrypt.hash(password, 10);
        return hash;
    }catch(e){
        console.log(e);
        console.log("Cannot hash password");
    }
}

const comparePassword = async (password, storedPassword) =>{
    try{
        const result = await bycrypt.compare(password, storedPassword);
        return result;
    }catch(e){
        console.log(e);
        console.log("Cannot compare password in database");
    }
}

export {passwordEncoder, comparePassword};