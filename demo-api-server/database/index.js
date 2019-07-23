const { Pool, Client } = require("pg");
const connectionString = "postgressql://postgres:postgres@0.0.0.0:4321/OR";

const client = new Client({
  connectionString: connectionString
});
client.connect();

module.exports = client;
