const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGO_URI || "mongodb://mongouser:mongopass@mongo:27017";

app.use(express.json());

app.get('/', async (req, res) => {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('demo');

        // Create
        await collection.insertOne({ message: 'MongoDB connected and CRUD successful...' });

        // Read
        const result = await collection.findOne();

        await client.close();
        res.send(result);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
