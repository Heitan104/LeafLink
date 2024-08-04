const express = require('express');
const bodyParser = require('body-parser');
const { NlpManager } = require('node-nlp');


const app = express();
const port = 1000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const manager = new NlpManager({ languages: ['en'] });


//intents


//greeting
manager.addDocument('en', 'Hi', 'greeting');
manager.addDocument('en', 'Hello', 'greeting');
manager.addDocument('en', 'Hey', 'greeting');


//planting
manager.addDocument('en', 'I need help planting a tree', 'help.planting');
manager.addDocument('en', 'How do I plant a tree', 'help.planting');
manager.addDocument('en', 'ways to plant a tree', 'help.planting');


//trees
manager.addDocument('en', 'What types of trees are commonly planted', 'help.trees');
manager.addDocument('en', 'What tree should I plant', 'help.trees');
manager.addDocument('en', 'How do I know which tree to plant', 'help.trees');
manager.addDocument('en', 'Im not sure which tree to plant in my area', 'help.trees');

// BlackSpruce
manager.addDocument('en', 'How do I plant Black Spruce?', 'help.blackspruce');
manager.addDocument('en', 'What are the needs of Black Spruce?', 'help.blackspruce');
// WhiteSpruce
manager.addDocument('en', 'How do I plant White Spruce?', 'help.WhiteSpruce');
manager.addDocument('en', 'What are the needs of White Spruce?', 'help.WhiteSpruce');
// LodgepolePine
manager.addDocument('en', 'How do I plant Lodgepole Pine?', 'help.LodgepolePine');
manager.addDocument('en', 'What are the needs of Lodgepole Pine?', 'help.LodgepolePine');
// JackPine
manager.addDocument('en', 'How do I plant Jack Pine?', 'help.JackPine');
manager.addDocument('en', 'What are the needs of Jack Pine?', 'help.JackPine');
// DouglasFir
manager.addDocument('en', 'How do I plant Douglas Fir?', 'help.DouglasFir');
manager.addDocument('en', 'What are the needs of Douglas Fir?', 'help.DouglasFir');
// EasternWhitePine
manager.addDocument('en', 'How do I plant Eastern White Pine?', 'help.EasternWhitePine');
manager.addDocument('en', 'What are the needs of Eastern White Pine?', 'help.EasternWhitePine');
// BalsamFir
manager.addDocument('en', 'How do I plant Balsam Fir?', 'help.BalsamFir');
manager.addDocument('en', 'What are the needs of Balsam Fir?', 'help.BalsamFir');
// RedPine
manager.addDocument('en', 'How do I plant Red Pine?', 'help.RedPine');
manager.addDocument('en', 'What are the needs of Red Pine?', 'help.RedPine');
// TremblingAspen
manager.addDocument('en', 'How do I plant Trembling Aspen?', 'help.TremblingAspen');
manager.addDocument('en', 'What are the needs of Trembling Aspen?', 'help.TremblingAspen');
// WhiteBirch
manager.addDocument('en', 'How do I plant White Birch?', 'help.WhiteBirch');
manager.addDocument('en', 'What are the needs of White Birch?', 'help.WhiteBirch');




// Responses
// Greeting
manager.addAnswer('en', 'greeting', 'Hello! How can I assist you today? If you have any questions about trees or planting, feel free to ask!');


// Planting
manager.addAnswer('en', 'help.planting', 'To plant a tree, you’ll need to follow these steps: choose the right species for your climate and soil, prepare the planting hole (twice as wide as the root ball), place the tree in the hole at the correct depth, backfill with soil, and water thoroughly. Make sure to mulch around the base and provide regular care as it establishes.');




// Trees
manager.addAnswer('en', 'help.trees', 'Choosing the right tree depends on your local climate, soil type, and space. Commonly planted trees in Canada include Black Spruce, White Spruce, Lodgepole Pine, and various deciduous trees. For specific recommendations, consider your region’s weather, soil conditions, and space available.');


// BlackSpruce
manager.addAnswer('en', 'help.blackspruce', 'To plant Black Spruce, select a location with well-drained soil and full sun to partial shade. The tree thrives in acidic, moist soils and is often used in reforestation projects. Water the tree regularly until established. It’s well-suited for cold climates and can tolerate wet conditions.');




// WhiteSpruce
manager.addAnswer('en', 'help.WhiteSpruce', 'White Spruce prefers well-drained, slightly acidic soils and full sun to partial shade. It is adaptable to various soil types and requires moderate watering. It’s ideal for colder climates and can handle a range of soil moisture levels.');






// LodgepolePine
manager.addAnswer('en', 'help.LodgepolePine', 'Lodgepole Pine prefers well-drained soils and full sun. It is tolerant of a variety of soil types but performs best in sandy or loamy soils. This tree is drought-tolerant once established and is well-suited to colder climates.');






// JackPine
manager.addAnswer('en', 'help.JackPine', 'Jack Pine thrives in well-drained, sandy soils and full sun. It is highly adaptable to dry conditions and poor soil quality. This tree is suitable for reforestation in cold climates and requires minimal maintenance once established.');






// DouglasFir
manager.addAnswer('en', 'help.DouglasFir', 'Douglas Fir prefers well-drained soils and full sun to partial shade. It is adaptable to various soil types but thrives in fertile, moist conditions. Regular watering is essential, especially in dry periods, and it grows well in cooler climates.');




// EasternWhitePine
manager.addAnswer('en', 'help.EasternWhitePine', 'Eastern White Pine prefers well-drained, sandy to loamy soils and full sun. It is adaptable to various soil types but grows best in moist, acidic conditions. Regular watering and mulching around the base are beneficial during dry periods.');




// BalsamFir
manager.addAnswer('en', 'help.BalsamFir', 'Balsam Fir prefers well-drained, acidic soils and full sun to partial shade. It thrives in cool, moist conditions and requires regular watering. This tree is well-suited for colder climates and can be used for ornamental purposes.');



// RedPine
manager.addAnswer('en', 'help.RedPine', 'Red Pine prefers well-drained soils and full sun. It is drought-tolerant and adapts to various soil types but thrives in sandy or loamy conditions. Regular watering is beneficial during dry periods, and it is well-suited to colder climates.');



// TremblingAspen
manager.addAnswer('en', 'help.TremblingAspen', 'Trembling Aspen prefers well-drained, moist soils and full sun to partial shade. It is adaptable to a range of soil types and climates but requires regular watering. This tree is known for its distinctive white bark and fluttering leaves.');



// WhiteBirch
manager.addAnswer('en', 'help.WhiteBirch', 'White Birch prefers well-drained, sandy soils and full sun to partial shade. It is adaptable to various soil types but grows best in moist, acidic conditions. Regular watering is beneficial, especially in dry periods, and it’s suitable for colder climates.');




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
