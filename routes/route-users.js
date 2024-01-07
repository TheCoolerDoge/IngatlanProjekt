const express = require("express");
const bcrypt = require("bcryptjs");
const UserDAO = require('../dao/user-dao');
const jwt = require('jsonwebtoken')
const jwtSecret = require("./../config/auth.js");
const router = express.Router();

router.get("/", async (req, res) => {
    var current_role;
    
    var token
    if(req.cookies!=undefined){
        token=req.cookies.jwt
    }
    
    if (token) {
        jwt.verify(token, jwtSecret.jwtSecret, (err, decodedToken) => {
           
            current_role = decodedToken.role;
        })
    };
    return res.render('fooldal', {
        current_role: current_role
                
    });
});

router.post("/login", async (req, res) => {
    let {email} = req.body;
    let password;
    if (typeof password === 'string'){
        password = req.body;
    } else{
        password = "aaaaaaaaa";
    }

    const user = await new UserDAO().getUserByEmail(email);

    if (!user) {
        res.status(400).json({
            message: "Login not successful",
        })
    } else {
        bcrypt.compare(password, user.password).then(function(result) {
            if (result) {
                const token = jwt.sign({
                        id: user.id,
                        email,
                        role: user.role
                    },
                    jwtSecret.jwtSecret
                );
                res.cookie("jwt", token, {
                    httpOnly: true
                });
                
                return res.redirect('/')
            } else {
                res.status(400).json({
                    message: "Login not succesful"
                });
                
            }
        });
    }
});

router.post("/register", async (req, res) => {
    let{nev} = req.body;
    let {email} = req.body;
    let password;
    if (typeof password === 'string'){
        password = req.body;
    } else{
        password = "aaaaaaaaa";
    }

    

    
    bcrypt.hash(password, 5).then(async (hash) => {
        await new UserDAO().createUser(nev, email, hash)
    });
    
    return res.redirect('/')
});


router.get("/logout", (req, res) => {
    res.cookie("jwt", "", {
        maxAge: "1"
    })
    res.redirect("/")
});

module.exports = router;