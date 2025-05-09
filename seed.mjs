const { db, schema } = require('./db/index.js');

async function seed() {
    try {
        // create admin admin:admin
        const admin = await db.insert(schema.admins).values({
            username: 'admin',
            password: 'admin'
        });

        console.log('Admin created:', admin);
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

seed();

