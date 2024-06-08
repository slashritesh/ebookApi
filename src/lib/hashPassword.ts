import bcrypt from 'bcryptjs'

export const hashPassword = async (password : string)=>{
    const outputPassword = await bcrypt.hash(password,10);
    return outputPassword
}

export const comparePassword = async (password : string , hashedpassword : string) =>{
    const ismatch = await bcrypt.compare(password,hashedpassword);
    return ismatch
}

