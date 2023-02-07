const express = require ('express');
const app = express();
const port = process.env.PORT || 3000;

const cors = require('cors');
app.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'user',
      password : 'password',
      database : 'messageboard'
    }
  });

app.use(express.json())

app.get('/posts', (req, res) => {
    knex.select().table('posts').then(
      (posts) =>  {
        res.json(posts) 
        res.status(200)
      })
})

app.post('/', (req, res) => {
    res.send(JSON.stringify(req.body))
})


app.listen(port, () => {
    console.log (`the server is running on ${port}`)
});