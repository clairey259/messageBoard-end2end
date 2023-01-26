const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

const posts = [
    {
        id: 1,
        title: 'Post 1',
        content: 'Content 1'
    },
    {
        id: 2,
        title: 'Post 2',
        content: 'Content 2'
    }

]

app.get('/posts', (req, res) => {
    res.status(200)
    res.json(posts)
})

app.post('/', (req, res) => {
    res.send(JSON.stringify(req.body))
})


app.listen(port, () => {
    console.log (`the server is running on ${port}`)
});