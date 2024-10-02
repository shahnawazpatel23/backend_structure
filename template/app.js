const express = require("express")
const dotenv = require("dotenv")
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")


dotenv.config();


dbConnect();
const app = express();

// define port in your .env file 
const port = process.env.PORT || 3002;

// middleware
app.use(express.json());

// routing
app.use('/api/auth',authRoutes)
app.use('/api/user',userRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
