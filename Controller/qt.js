const db = require('./config/dbConfig');

async function sayHello(req, res) {
    // res.send('Hello, World!');
    try {
        const result = await db.executeQuery('SELECT * FROM YourTable');
        res.send(result);
    } catch (err) {
        res.status(500).send('An error occurred');
        console.error(err);
    }
}

