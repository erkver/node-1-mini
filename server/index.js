const express    = require('express'),
      bodyParser = require('body-parser'),
      app        = express(),
      bc         = require('./controllers/books_controller')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../build'))

app.get('/api/books', bc.read);
app.post('/api/books', bc.create);
app.put('/api/books/:id', bc.update);
app.delete('/api/books/:id', bc.delete);

const port = 3000;
app.listen(port, () => console.log(`The server is running on port ${port}`));