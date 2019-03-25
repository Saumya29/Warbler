const express = require("express");
const router = express.Router({ mergeParams: true });

const { createMessage } = require("../handlers/messages");

 //api/users/:id/messages
router.route("/").post(createMessage);

module.exports = router;