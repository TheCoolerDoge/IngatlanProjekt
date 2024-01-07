const express = require("express");
const router = express.Router();
const HirDAO = require('../dao/hir-dao');
const {userAuth, jwtSecret} = require("./../config/auth.js");
const jwt = require("jsonwebtoken")

router.get('/profil', (req, res) => {
    res.render('profil')
    
  })
  

router.get("/getHir", async (req, res) => {
    let hirek = await new HirDAO().getHir();
    const token = req.cookies.jwt
    var current_role;
    
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            current_email = decodedToken.email;
            current_role = decodedToken.role;
        })
    };

    return res.render('/profil', {
        hirek: hirek,
        current_email: decodedToken.email,
        current_role: current_role
    });
});

router.post("/addHir", async (req, res) => {
    let {cim} = req.body;
    let {tartalom} = req.body;
    let {kelt} = req.body;
        
    await new HirDAO().createHir(cim, tartalom, kelt);
    return res.redirect('/profil')
});

router.post("/updateHir", async (req, res) => {
    let {id} = req.body;
    let {cim} = req.body;
    let {tartalom} = req.body;
    let {kelt} = req.body;
    await new HirDAO().updateHir(id, cim, tartalom, kelt);
    res.redirect("/profil");
});

router.post("/deleteHir", async (req, res) => {
    let {id} = req.body;
    await new HirDAO().deleteHir(id);
    res.redirect("/profil");
});

module.exports = router;