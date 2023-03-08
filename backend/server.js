const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://Mongojan:test123test@cluster0.vygn7mg.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  const collection = client.db("techradar").collection("tech");
  collection.find({}).toArray((err, docs) => {
    if (err) {
      console.log(err);
      res.status(500).send({ error: 'Error fetching data' });
    } else {
      res.send(docs);
    }
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
