const db = require('../config/db');

class UserDAO {

    async createUser( nev, email, jelszo) {
        await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [nev, email, jelszo, ])
            .catch(console.log);
        return;
    };

    async getUserById(id) {
        let result = await db.query('SELECT * FROM users WHERE id = $1', [id])
            .catch(console.log);
        return result.rows[0];
    };

    async getUsers() {
        let results = await db.query(`SELECT * FROM users`)
        .catch(console.log);
        return results.rows;
    };

    async getUserByEmail(email) {
        let result = await db.query('SELECT * FROM users WHERE email = $1', [email])
            .catch(console.log);
        return result.rows[0];
    };

    async deleteUsers(id) {
        console.log(id)
        await db.query(`DELETE FROM users WHERE id=$1`, [parseInt(id)])
           .catch(console.log);

        return;
    };

    async updateUsers(id, nev, email, jelszo) {
        await db.query(`UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4`, [nev, email, jelszo, parseInt(id)])
            .catch(console.log);

        return;
    };


};

module.exports = UserDAO;