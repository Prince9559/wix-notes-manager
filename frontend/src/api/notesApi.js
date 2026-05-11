import axios from "axios";

const API_URL =
  "https://wix-notes-manager.onrender.com/api/notes";


// GET Notes
export const getNotes = async () => {
  return await axios.get(API_URL);
};


// ADD Note
export const addNote = async (noteData) => {
  return await axios.post(
    API_URL,
    noteData
  );
};


// UPDATE Note
export const updateNote = async (
  id,
  noteData
) => {

  return await axios.put(
    `${API_URL}/${id}`,
    noteData
  );
};


// DELETE Note
export const deleteNote = async (id) => {

  return await axios.delete(
    `${API_URL}/${id}`
  );
};