import "./NoteItem.css";

function NoteItem({
  note,
  onDelete,
  onEdit,
}) {

  return (

    <div className="note-item">

      <h3>{note.title}</h3>

      <p>{note.description}</p>

      <div className="buttons">

        <button
          onClick={() => onEdit(note)}
        >
          Edit
        </button>

        <button
          onClick={() =>
            onDelete(note._id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default NoteItem;