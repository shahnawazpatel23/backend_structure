const jwt = require ("jsonwebtoken");


const verifyToken = (req,res,next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(400).json({message:"token not found"})
    }

    token = authHeader.split(" ")[1] 

    const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
    req.user = decodedToken
    next()
}

module.exports = verifyToken