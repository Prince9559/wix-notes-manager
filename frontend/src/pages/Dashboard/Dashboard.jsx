import React, { useEffect, useState } from "react";

import "./Dashboard.css";

import {
  getNotes,
  addNote,
  deleteNote,
  updateNote,
} from "../../api/notesApi";

import Navbar from "../../components/Navbar/Navbar";
import NoteForm from "../../components/NoteForm/NoteForm";
import NoteList from "../../components/NoteList/NoteList";

function Dashboard() {

  const [notes, setNotes] = useState([]);

  const [editingNote, setEditingNote] =
    useState(null);


  const fetchNotes = async () => {

    const response = await getNotes();

    setNotes(response.data);
  };


  useEffect(() => {

    fetchNotes();

  }, []);


  const handleAddNote = async (noteData) => {

    await addNote(noteData);

    fetchNotes();
  };


  const handleUpdateNote = async (
    noteData
  ) => {

    await updateNote(
      editingNote._id,
      noteData
    );

    setEditingNote(null);

    fetchNotes();
  };


  const handleDeleteNote = async (id) => {

    await deleteNote(id);

    fetchNotes();
  };


  return (

    <div className="dashboard">

      <Navbar />

      <NoteForm
        onAdd={handleAddNote}
        onUpdate={handleUpdateNote}
        editingNote={editingNote}
      />

      <NoteList
        notes={notes}
        onDelete={handleDeleteNote}
        onEdit={setEditingNote}
      />

    </div>
  );
}

export default Dashboard;