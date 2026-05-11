import React, {useState,useEffect,} from "react";
import "./NoteForm.css";

function NoteForm({onAdd,onUpdate,editingNote,}) 
{

  const [title, setTitle] = useState("");
  const [description, setDescription]=useState("");

  useEffect(() => {

    if (editingNote) 
    {
      setTitle(editingNote.title);
      setDescription(
        editingNote.description
      );
    }

  }, [editingNote]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = {title,description,};
    if (editingNote) 
    {
      onUpdate(noteData);
    } 
    else 
    {
      onAdd(noteData);
    }
    setTitle("");
    setDescription("");
  };


  return (

    <form className="note-form"onSubmit={handleSubmit}>

      <input type="text" placeholder="Enter title" value={title} onChange={(e) =>setTitle(e.target.value)}/>
      <textarea placeholder="Enter description" value={description}onChange={(e) =>setDescription(e.target.value)}/>

      <button type="submit">{editingNote ? "Update Note" : "Add Note"}</button>

    </form>
  );
}

export default NoteForm;