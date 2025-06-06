const { text, integer, sqliteTable } = require("drizzle-orm/sqlite-core");

const admins = sqliteTable("admins", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

const trackings = sqliteTable("trackings", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  trackingNumber: text("trackingNumber").notNull().unique(),
  shipDate: integer("shipDate", { mode: "timestamp" }), // Store dates as timestamps (Unix epoch seconds or milliseconds)
  deliveryDate: integer("deliveryDate", { mode: "timestamp" }),
  estimatedDeliveryDate: integer("estimatedDeliveryDate", { mode: "timestamp" }),
  recipientName: text("recipientName").notNull(),
  recipientPhone: text("recipientPhone").notNull(),
  destination: text("destination").notNull(),
  origin: text("origin").notNull(),
  status: text("status").notNull(),
  service: text("service").notNull(),
});

module.exports = { admins, trackings };

