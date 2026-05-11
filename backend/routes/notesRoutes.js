const express = require("express");

const router = express.Router();

const {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");


// GET + POST
router.route("/")
  .get(getNotes)
  .post(addNote);


// PUT + DELETE
router.route("/:id")
  .put(updateNote)
  .delete(deleteNote);


module.exports = router;