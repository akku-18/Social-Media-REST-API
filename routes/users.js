const router = require("express").Router(); 

router.get("/", (req, res) =>{
    res.send("Hey it is user route")
})

module.exports = router