const express=require("express")
const {insertuser}=require("../controllers/user")

const router= express.Router()
router.route("/createUser").post(insertuser)

module.exports = router