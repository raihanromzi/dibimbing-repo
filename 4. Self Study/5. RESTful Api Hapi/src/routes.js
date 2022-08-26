const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByHandler,
  deleteNoteByHandler
} = require('./handler')

const routes = [
  // Create
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
  },
  // Read
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler
  },
  // Update
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByHandler
  },
  // Delete
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByHandler
  }
]

module.exports = routes
