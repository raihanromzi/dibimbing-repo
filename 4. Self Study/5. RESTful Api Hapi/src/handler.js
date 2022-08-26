const { nanoid } = require('nanoid')
const notes = require('./notes')

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload
  const id = nanoid(16)
  const createdAt = new Date().toString()
  const updatedAt = createdAt

  const newNote = {
    title, tags, body, id, createdAt, updatedAt
  }

  notes.push(newNote)

  const isSuccess = notes.filter((note) => note.id === id).length > 0

  if (isSuccess) {
    const response = h.response({
      status: 'Success',
      message: 'Catatan berhasil ditambahkan',
      date: {
        noteId: id
      }
    })
    response.code(201)
    return response
  } else {
    const response = h.response({
      status: 'Fail',
      message: 'Catatan Gagal Ditambahkan'
    })
    response.code(500)
    return response
  }
}

const getAllNotesHandler = () => ({
  status: 'Success',
  data: {
    notes
  }
})

const getNoteByIdHandler = (request, h) => {
  const { id } = request.params
  const note = notes.filter((n) => n.id === id)[0]

  if (note !== undefined) {
    return {
      status: 'Success',
      data: {
        note
      }
    }
  }

  const response = h.response({
    status: 'Fail',
    message: 'Catatan Tidak Ditemukan'
  })
  response.code(404)
  return response
}

const editNoteByHandler = (request, h) => {
  const { id } = request.params
  const { title, tags, body } = request.payload
  const updateAt = new Date().toISOString()
  const index = notes.findIndex((note) => note.id === id)

  if (index !== -1) {
    notes[index] = {
      // Mempertahankan nilai notes yang tidak diubah
      ...notes[index],
      title,
      tags,
      body,
      updateAt
    }
    const response = h.response({
      status: 'Success',
      message: 'Catatan berhasil diperbarui'

    })
    response.code(200)
    return response
  }

  const response = h.response({
    status: 'fail',
    message: 'Gagal memperbarui catatan. Id tidak ditemukan'
  })
  response.code(404)
  return response
}

const deleteNoteByHandler = (request, h) => {
  const { id } = request.params
  const index = notes.findIndex((note) => note.id === id)
  if (index !== -1) {
    notes.splice(index, 1)
    const response = h.response({
      status: 'Success',
      message: 'Berhasil Menghapus'
    })
    response.code(200)
    return response
  }
  const response = h.response({
    status: 'Success',
    message: 'Gagal Menghapus'
  })
  response.code(404)
  return response
}

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByHandler, deleteNoteByHandler }
