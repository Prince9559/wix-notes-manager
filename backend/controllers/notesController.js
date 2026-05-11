const Note = require("../models/Note");
const getNotes = async (req, res) => {
try 
{
    const notes = await Note.find();
    res.json(notes);
}catch (error) 
{
    res.status(500).json({ message: error.message,});
}};

const addNote = async (req, res) => {

try 
{
    const { title, description } = req.body;
    const note = await Note.create({title,description,});
    res.status(201).json(note);
}catch (error) 
{
    res.status(500).json({message: error.message,});
}};

const updateNote = async (req, res) => {

try 
{
    const { title, description } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,description,},
      {
        new: true,
      }
    );
    res.json(updatedNote);
} catch (error) 
{
    res.status(500).json({message: error.message,});
}};

const deleteNote = async (req, res) => {
try 
{

    await Note.findByIdAndDelete(req.params.id);
    res.json({message: "Note Deleted",});

} catch (error) 
{
  res.status(500).json({message: error.message,});
}};


module.exports = {
  getNotes,
  addNote,
  updateNote,
  deleteNote,
};