const express = require("express");
const router = express.Router();
const IngatlanDAO = require('../dao/ingatlan-dao');
const {userAuth, jwtSecret} = require("./../config/auth.js");
const jwt = require("jsonwebtoken")

router.get('/hirdetesfeladas', (req, res) => {
    res.render('hirdetesfeladas')
    
  })

  router.get('/profil', async(req, res) => {
   
        let ingatlanok = await new IngatlanDAO().getIngatlan();
        const token = req.cookies.jwt
        var current_role;
        
        
        
        if (token) {
            jwt.verify(token, jwtSecret, (err, decodedToken) => {
                current_role = decodedToken.role;
            })
        };
    
        return res.render('profil', {
            ingatlanok: ingatlanok,
            current_role: current_role
        });
    });
    

  
  
router.get("/getIngatlan", async (req, res) => {
    let ingatlanok = await new IngatlanDAO().getIngatlan();
    const token = req.cookies.jwt
    var current_role;
    
    
    
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            current_role = decodedToken.role;
        })
    };
    
    return res.render('profil', {
        ingatlanok: ingatlanok,
        current_role: current_role
    });
});

router.post("/add", async (req, res) => {
    
    let {iranyitoszam} = req.body;
    let {varos} = req.body;
    let {utca}= req.body;
    let {hazszam}= req.body;
    let {emelet}= req.body;
    let {ajto}= req.body;
    let {meret}= req.body;
    let {ar}= req.body;
    let {kategoria}= req.body;
    let {leiras}= req.body;
    let {net}= req.body;
    let {gaz}= req.body;
    let {viz}= req.body;
    let {villany}= req.body;
    let {szoba}= req.body;
    let {kep}= req.body;
    let {elado}= req.body;
    let {kiado}= req.body;

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            email = decodedToken.email;
        })
    }
        
    await new IngatlanDAO().createIngatlan(iranyitoszam, varos, utca, hazszam, emelet, ajto, meret, ar, kategoria, leiras, net, gaz, viz, villany, szoba, kep, elado, kiado);
    return res.redirect('/fooldal')
});

router.get("/edit/:id", async (req, res) => {
    const token = req.cookies.jwt;
    let id = req.body;
   
    var current_role;
    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            current_role = decodedToken.role;
        })
    }
    let ingatlan = await new IngatlanDAO().getOneIngatlan(id);

    res.render("fooldal", {
        model: ingatlan,
        current_role: current_role
    });
});

router.post("/update/:id", async (req, res) => {
    let id = req.body;
    let {iranyitoszam} = req.body;
    let {varos} = req.body;
    let {utca}= req.body;
    let {hazszam}= req.body;
    let {emelet}= req.body;
    let {ajto}= req.body;
    let {meret}= req.body;
    let {ar}= req.body;
    let {kategoria}= req.body;
    let {leiras}= req.body;
    let {net}= req.body;
    let {gaz}= req.body;
    let {viz}= req.body;
    let {villany}= req.body;
    let {szoba}= req.body;
    let {kep}= req.body;
    let {elado}= req.body;
    let {kiado}= req.body;

    await new IngatlanDAO().updateIngatlan(id, iranyitoszam, varos, utca, hazszam, emelet, ajto, meret, ar, kategoria, leiras, net, gaz, viz, villany, szoba, kep, elado, kiado);
    res.redirect("/fooldal");
});

router.post("/deleteIngatlan", async (req, res) => {
    let {id} = req.body;
    await new IngatlanDAO().deleteIngatlan(id);
    res.redirect("/profil");
});



module.exports = router;