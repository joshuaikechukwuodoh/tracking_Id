require('dotenv').config();
const { defineConfig } = require('drizzle-kit');

module.exports = defineConfig({
  out: './drizzle',
  schema: './db/schema.js',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'file:local.db',
  },
});
