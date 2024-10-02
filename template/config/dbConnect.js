const mogoose = require('mongoose');

const dbConnect = async()=>{
    try {
        const connect = await mogoose.connect(process.env.MONGODB_URI);
        console.log('Database connected successfully >>>>')
    } catch (error) {

        throw new Error("error while connecting");
        
        
    }
}

module.exports = dbConnect;
