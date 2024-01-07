const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'doadmin',
    host: 'db-postgresql-fra1-16709-do-user-12690042-0.b.db.ondigitalocean.com',
    database: 'defaultdb',
    password: 'AVNS_MdbEdmuqb9Yy3ByRB7f',
    port: 25060,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;