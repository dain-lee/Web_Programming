const express = require("express");
const router = express.Router();

const review = require("../applications/review/reviewController.js");



router.get("/review/list", review.read);
router.post("/review", review.create);
router.put("/review", review.update);


module.exports = router;
