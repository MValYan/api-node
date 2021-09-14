const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/api-node",
    { useNewURLParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) 
            console.log("MongoDB connecte");
        else 
            console.log("connection error : " + err);
    }
)