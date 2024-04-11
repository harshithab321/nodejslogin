const LoginSchema = require('./model');
//const User = require('./model');
const jwt = require('jsonwebtoken');
async function FunctionLog(req,res) {
    try {
       console.log("hello")
        const {username,email}=req.body
        const user = await User.findOne({ username: username });
        if (!user) {
            throw new Error("User not found");
        }
        // Check password validity
        if (user.password !== password) {
            throw new Error("Invalid password");
        }
        
        if (user && user.password && /^[A-Za-z]{1,6}$/g.test(user.password) && /[A-Z]/.test(user.password)) {
            res.status(200).send("User is present");
        } else {
            res.status(400).send("Invalid password format");
        }
        
        // Example:
        const token = generateToken(user); // You need to implement generateToken function
        user.token=token
        return token; // Or any other data you want to return upon successful login
    } catch (error) {
        // Handle any errors that might occur during the login process
        console.error("Login failed:", error.message);
        throw error;
    }
}

// Example token generation function
function generateToken(user) {
    const payload = {
        userId: user._id,
        username: user.username // You can include additional information in the payload if needed
    };
 const secretKey = process.env.JWT_SECRET_KEY 
; // Replace with your actual secret key
const options = {
 expiresIn: '1h' // Token expiration time
};
const token = jwt.sign(payload, secretKey, options);
 return token;
}

module.exports = FunctionLog;
