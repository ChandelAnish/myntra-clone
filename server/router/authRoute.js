const express = require("express");
const router = express.Router();
const { login, register, logout } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
