const db = require('../config/db');

class IngatlanDAO {

    async getIngatlan() {
        let results = await db.query(`SELECT * FROM Ingatlan`).
        catch(console.log);
        return results.rows;
    };

    async getOneIngatlan(id) {
        let result = await db.query('SELECT * FROM Ingatlan WHERE id = $1', [id])
            .catch(console.log);
        return result.rows[0];
    };

    async createIngatlan(iranyitoszam, varos, utca, hazszam, emelet, ajto, meret, ar, kategoria, leiras, net, gaz, viz, villany, szoba, kep, elado, kiado) {
        await db.query('INSERT INTO Ingatlan (iranyitoszam, varos, utca, hazszam, emelet, ajto, meret, ar, kategoria, leiras, net, gaz, viz, villany, szoba, kep, elado, kiado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)', [iranyitoszam, varos, utca, hazszam, emelet, ajto, meret, ar, kategoria, leiras, net, gaz, viz, villany, szoba, kep, elado, kiado])
            .catch(console.log);
        return;
    };

    async updateIngatlan(id, iranyitoszam, varos, utca, hazszam, emelet, ajto, meret, ar, kategoria, leiras, net, gaz, viz, villany, szoba, kep, elado, kiado) {
        await db.query(`UPDATE Ingatlan SET iranyitoszam = $1, varos = $2, utca = $3, hazszam = $4, emelet = $5, ajto = $6, meret = $7, ar = $8, kategoria = $9, leiras = $10, net = $11, gaz = $12, viz = $13, villany = $14, szoba = $15, kep = $16, elado = $17, kiado = $18 WHERE id = $19`, [iranyitoszam, varos, utca, hazszam, emelet, ajto, meret, ar, kategoria, leiras, net, gaz, viz, villany, szoba, kep, elado, kiado, parseInt(id)])
            .catch(console.log);

        return;
    };

    async deleteIngatlan(id) {
        await db.query(`DELETE FROM Ingatlan WHERE id=$1`, [parseInt(id)])
            .catch(console.log);

        return;
    };

};

module.exports = IngatlanDAO;