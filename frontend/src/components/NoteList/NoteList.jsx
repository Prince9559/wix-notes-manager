import "./NoteList.css";

import NoteItem from "../NoteItem/NoteItem";

function NoteList({
  notes,
  onDelete,
  onEdit,
}) {

  return (

    <div className="note-list">

      {
        notes.map((note) => (

          <NoteItem
            key={note._id}
            note={note}
            onDelete={onDelete}
            onEdit={onEdit}
          />

        ))
      }

    </div>
  );
}

export default NoteList;