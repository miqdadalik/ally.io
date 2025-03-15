import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function connectToDatabase() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS wireguard_servers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ip TEXT NOT NULL,
            username TEXT NOT NULL,
            keyPath TEXT NOT NULL
        );
    `);

    return db;
}