const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()

// Node puro
// const http = require('http');
app.use(cors())
app.use(express.json())

// let notes = [
//     {
//       id: 1,
//       content: "HTML is easy",
//       date: "2019-05-30T17:30:31.098Z",
//       important: true
//     },
//     {
//       id: 2,
//       content: "Browser can execute only Javascript",
//       date: "2019-05-30T18:39:34.091Z",
//       important: false
//     },
//     {
//       id: 3,
//       content: "GET and POST are the most important methods of HTTP protocol",
//       date: "2019-05-30T19:20:14.298Z",
//       important: true
//     }
//   ]

// Con node puro
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(notes))
// })

// const PORT = 3001
// app.listen(PORT)
// console.info(`Server is running on port ${PORT}`)

// app.get('/', (req, res) => {
//     res.send('<h1>Holissss</h1>')
// })

// app.get('/api/notes', (req, res) => {
//     res.json(notes)
// })

// app.get('/api/notes/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const note = notes.find(note => note.id === id)
//     if(note){
//         res.json(note)
//     } else {
//         res.status(404).end()
//     }
// })

// app.post('/api/notes', (req, res) => {
//   const note = req.body;
//   const ids = notes.map(note => note.id)
//   const maxId = Math.max(...ids)

//   const newNote = {
//     id: maxId + 1,
//     content: note.content,
//     important: typeof note.important !== 'undefined' ? note.important : false,
//     date: new Date().toISOString()
//   }

//   notes = [...notes, newNote]

//   res.json(newNote)

// })

// app.delete('/api/notes/:id', (req, res) => {
//     const id = Number(req.params.id);
//     notes = notes.filter(note => note.id !== id)
//     res.status(204).end()
// })

app.use('/', routes())

const PORT = 3001
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`)
})
