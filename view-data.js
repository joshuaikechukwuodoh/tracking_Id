const { db, schema } = require('./db/index.js');

async function viewData() {
    try {
        // View all admins
        console.log('\n=== Admins ===');
        const admins = await db.query.admins.findMany();
        console.log(JSON.stringify(admins, null, 2));

        // View all trackings
        console.log('\n=== Trackings ===');
        const trackings = await db.query.trackings.findMany();
        console.log(JSON.stringify(trackings, null, 2));

    } catch (error) {
        console.error('Error viewing data:', error);
    }
}

viewData(); 