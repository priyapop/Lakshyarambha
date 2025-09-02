import jwt from "jsonwebtoken"

const JWT_SECRET = 'pineapple'

export const authMiddleware = (req,res,next)=>{

const token = req.headers.authorization
if(!token) return res.status(401).json({msg:"Unauthorized"})

try {
    const decoded = jwt.verify(token.split(" ")[1],JWT_SECRET)
    req.user = decoded
    next()
}catch(error){
    console.log(error)
    return res.status(401).json({msg:"Token not valid"})
}
}