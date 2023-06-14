const db = require('../../Config/dbConfig');

async function sayHello(req, res) {
    // res.send('Hello, World!');
    try {
        const result = await db.executeQuery('SELECT TOP 10 * FROM [dbo].[ADDRESS]');
        res.send(result);
    } catch (err) {
        res.status(500).send('An error occurred');
        console.error(err);
    }
}

async function insert(req, res) {
    // res.send('Hello, World!');
    try {
        const pool = await db.getDbConnection();
        const query = `INSERT INTO .[dbo].[KIT_TEST] (id) VALUES ('1')`;
        await pool.request().query(query);
        res.send('Data inserted successfully.');
    } catch (err) {
        res.status(500).send('An error occurred');
        console.error(err);
    }
}


module.exports = {
    sayHello,
    insert
};