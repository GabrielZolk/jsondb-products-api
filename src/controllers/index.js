import { readDB, writeDB } from '../data/index.js';

class Controller {
    getAll = async (req, res) => {
        try {
            const db = await readDB();
            return res.json(db);
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao ler o banco de dados' });
        }
    };

    getByIndex = async (req, res) => {
        const { index } = req.params;
        const db = await readDB();

        if (index >= 0 && index < db.length) {
            return res.json(db[index]);
        } else {
            return res.status(404).json({ message: 'Índice inválido' });
        }
    };

    postInto = async (req, res) => {
        const { name, description, price, priceDate } = req.body;
        const newProduct = { name, description, price, priceDate };
        const db = await readDB()
        db.push(newProduct);
        writeDB(db);

        return res.json(newProduct);
    };

    update = async (req, res) => {
        const { index } = req.params;
        const { fieldToUpdate, newValue, newData } = req.body;
        const db = await readDB();

        if (index >= 0) {
            if (fieldToUpdate && newValue) {
                db[index][fieldToUpdate] = newValue;
                writeDB(db);
                return res.json(db[index]);
            } else if (newData) {
                db[index] = newData;
                writeDB(db);
                return res.json(db[index]);
            } else {
                return res.status(400).json({ message: 'Formato de dados inválido' });
            }
        } else {
            return res.status(404).json({ message: 'Índice inválido' });
        }
    };

    delete = async (req, res) => {
        const { index } = req.params;
        const db = await readDB();

        if (index >= 0 && index < db.length) {
            db.splice(index, 1);
            writeDB(db);
            return res.json({ message: 'Sucesso!' });
        } else {
            return res.status(404).json({ message: 'Índice inválido' });
        }
    };
}

export default Controller;
