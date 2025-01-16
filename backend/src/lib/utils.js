import jwt from 'jsonwebtoken'
import cookie from 'cookie-parser'
export const generateToken=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'7d'
    });
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*100, //ms
        httpOnly:true,
        sameSute:"strict",
        secure:process.env.NODE_ENV !== "development"
    });
    return token;
}