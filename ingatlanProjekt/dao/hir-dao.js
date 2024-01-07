const db = require('../config/db');

class HirDAO {

    async getHir() {
        let results = await db.query(`SELECT * FROM Hir`).
        catch(console.log);
        return results.rows;
    };

    async getOneHir(id) {
        let result = await db.query('SELECT * FROM Hir WHERE id = $1', [id])
            .catch(console.log);
        return result.rows[0];
    };

    async createHir(cim, tartalom, kelt) {
        await db.query('INSERT INTO Hir (cim, tartalom, kelt) VALUES ($1, $2, $3)', [cim, tartalom, kelt])
            .catch(console.log);
        return;
    };

    async updateHir(id, cim, tartalom, kelt) {
        await db.query(`UPDATE Hir SET cim = $1, tartalom = $2, kelt = $3 WHERE id = $4`, [cim, tartalom, kelt, parseInt(id)])
            .catch(console.log);

        return;
    };

    async deleteHir(id) {
        await db.query(`DELETE FROM Hir WHERE id=$1`, [parseInt(id)])
            .catch(console.log);

        return;
    };

};

module.exports = HirDAO;