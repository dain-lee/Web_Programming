const express = require("express");
const router = express.Router();

const like = require("../applications/like/likeController.js");


router.get("/like/list", like.read);
router.post("/like", like.create);
router.delete("/like", like.delete);

module.exports = router;
