const express = require("express");
const router = express.Router();

const {getNotes,addNote,updateNote,deleteNote,} = require("../controllers/notesController");
router.route("/")
  .get(getNotes)
  .post(addNote);

router.route("/:id")
  .put(updateNote)
  .delete(deleteNote);


module.exports = router;