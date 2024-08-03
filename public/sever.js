const express = require('express');
const bodyParser = require('body-parser');
const { NlpManager } = require('node-nlp');

const app = express();
const port = 1000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const manager = new NlpManager({ languages: ['en'] });

//intents
manager.addDocument('en', 'Hi', 'greeting');
manager.addDocument('en', 'Hello', 'greeting');
manager.addDocument('en', 'Hey', 'greeting');
manager.addDocument('en', 'I need help planting a tree', 'help.planting');

//responses
manager.addAnswer('en', 'greeting', 'Hello! I can help you with planting a tree. What type of tree are you planning to plant?');
manager.addAnswer('en', 'help.planting', 'Sure, I can help you with planting a tree. What type of tree are you planning to plant?');

//train and save the model
(async() => {
    await manager.train();
    manager.save();
})();

//user messages
app.post('/chat', async (req, res) => {
    const { message } = req.body;
    const response = await manager.process('en', message);
    res.json({ reply: response.answer });
});

//chatbot frontend
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});