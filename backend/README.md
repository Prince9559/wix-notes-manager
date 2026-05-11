# Backend - Wix Notes Manager

This is the backend server for the Wix Notes Manager application.

The backend is built using:

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

# Features

- Create Note
- Fetch Notes
- Update Note
- Delete Note

---

# Technologies Used

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Other Packages
- cors
- dotenv
- nodemon

---

# Folder Structure

backend/
│
├── controllers/
│   └── notesController.js
│
├── models/
│   └── Note.js
│
├── routes/
│   └── notesRoutes.js
│
├── config/
│   └── db.js
│
├── .env
├── server.js
├── package.json
└── README.md

---

# API Routes

## Get All Notes

GET

/api/notes

---

## Add Note

POST

/api/notes

Body:

```json
{
  "title": "Note Title",
  "description": "Note Description"
}