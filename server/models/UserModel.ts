const { Pool } = require('pg');
const variables = require('../../settings.ts');

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = variables.postgres;

const pool = new Pool({
  connectionString: myURI,
});

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;

// Table: user
// {
//   id: (autogenerated) Primary Key
//   username: string,
//   email: string,
//   password: string,
// }

module.exports = pool; // <-- export your model
