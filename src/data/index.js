import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join('./src/data/db.json');

export async function readDB() {
    try {
        const rawData = await fs.readFile(dbPath, 'utf-8');
        return JSON.parse(rawData);
    } catch (error) {
        console.error('Erro ao ler o banco de dados:', error);
        return [];
    }
}

export async function writeDB(data) {
    try {
        await fs.writeFile(dbPath, JSON.stringify(data, null, 4), 'utf-8');
    } catch (error) {
        console.error('Erro ao escrever no banco de dados:', error);
    }
}
