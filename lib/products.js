const mysql = require('serverless-mysql')({
    config: {
        host: process.env.ENDPOINT,
        database: process.env.DATABASE,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
    },
});

export async function getCocktails() {
    let results = await mysql.query('SELECT * FROM carta');

    await mysql.end();

    return results;
}
