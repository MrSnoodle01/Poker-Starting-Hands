import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('poker.db');

export const initDB = () => {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS hands (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        hand TEXT NOT NULL,
        date TEXT NOT NULL
        );
    `);
}