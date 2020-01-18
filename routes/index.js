const express = require("express");
const router = express.Router();

router.use("/songs", require("./songs_route"));

module.exports = router;
