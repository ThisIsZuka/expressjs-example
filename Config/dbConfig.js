// dbConfig.js
const sql = require('mssql');

const dbConfig = {
    user: 'kittisak.u',
    password: 'com@22321',
    server: '43.254.133.123', // You can use your server's IP address or domain here
    database: 'HPCOM7',
    options: {
        encrypt: true, // Use this if you're on Windows Azure
        trustServerCertificate: true
    }
};

function getDbConnection() {
    return new sql.ConnectionPool(dbConfig).connect()
        .then(pool => {
            console.log('Connected to MSSQL')
            return pool
        })
        .catch(err => console.log('Database Connection Failed! Bad Config: ', err));
}

async function executeQuery(query) {
    try {
        const pool = await getDbConnection();
        return await pool.request().query(query);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    getDbConnection,
    executeQuery
};