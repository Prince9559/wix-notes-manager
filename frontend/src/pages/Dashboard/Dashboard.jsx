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

import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


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


  const handleAddNote = async (
    noteData
  ) => {

    await addNote(noteData);

    toast.success(
      "Note Added Successfully"
    );

    fetchNotes();
  };


  const handleUpdateNote = async (
    noteData
  ) => {

    await updateNote(
      editingNote._id,
      noteData
    );

    toast.success(
      "Note Updated Successfully"
    );

    setEditingNote(null);

    fetchNotes();
  };


  const handleDeleteNote = async (id) => {

    await deleteNote(id);

    toast.error(
      "Note Deleted Successfully"
    );

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

      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

    </div>
  );
}

export default Dashboard;