const db = require('../../Config/dbConfig');
const cron = require('node-cron');

async function insertData() {
    try {
        console.log('Running insertData...');
        const pool = await db.getDbConnection();
        const query = `INSERT INTO .[dbo].[KIT_TEST] (id) VALUES ('1')`;
        await pool.request().query(query);
        console.log('Data inserted successfully.');
    } catch (err) {
        console.error('Error inserting data:', err);
    }
}

console.log('Scheduling cron job...');
cron.schedule('* * * * *', () => {
    console.log('Cron job started...');
    insertData();
});
console.log('Cron job scheduled.');
