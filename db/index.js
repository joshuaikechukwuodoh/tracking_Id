require('dotenv').config();
const { drizzle } = require('drizzle-orm/libsql');
const { createClient } = require('@libsql/client');
const schema = require('./schema.js');
const path = require('path');

// Ensure we have a valid database URL
const dbUrl = 'file:local.db';
console.log('Database URL:', dbUrl);

// Create client with explicit persistence settings
const client = createClient({ 
    url: dbUrl,
});

const db = drizzle(client, { schema });

// Initialize database
async function initializeDatabase() {
    try {
        // Create tables if they don't exist
        await client.execute(`
            CREATE TABLE IF NOT EXISTS admins (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS trackings (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                trackingNumber TEXT NOT NULL UNIQUE,
                shipDate INTEGER,
                deliveryDate INTEGER,
                estimatedDeliveryDate INTEGER,
                recipientName TEXT NOT NULL,
                recipientPhone TEXT NOT NULL,
                destination TEXT NOT NULL,
                origin TEXT NOT NULL,
                status TEXT NOT NULL,
                service TEXT NOT NULL
            );
        `);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Database initialization error:', error);
        throw error;
    }
}

// Run initialization
initializeDatabase().catch(console.error);

module.exports = { db, schema };
