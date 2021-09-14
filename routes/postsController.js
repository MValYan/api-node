const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;
const { PostsModel } = require('../models/postsModel');


//recuperer
router.get('/', (req, res)=>{
    PostsModel.find((err, docs)=>{
        if (!err) res.send(docs);
        else console.log("error recolte de donnée: " + err)
    })
});


//ajouter
router.post('/', (req, res) => {
    console.log(req.body);
    const newRecord = new PostsModel({
        auteur: req.body.auteur,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Erreur de création de données: ' + err)
    })
})



// modification
router.put("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID non connu : " + req.params.id)
    
    const updateRecord = {
        auteur : req.body.auteur,
        message : req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        {new : true},
        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("erreur de modification : " + err);
        }
    )
})

//effacer

router.delete("/:id", (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID non connu : " + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,

        (err, docs) => {
            if (!err) res.send(docs);
            else console.log("probleme d'effacage " + err);
        }
    )
})



module.exports = router