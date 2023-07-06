import pg from "pg";

const { Pool } = pg;

const getPoolConection = new Pool({
  host: "localhost",
  port: 5432,
  user: "estebandev",
  password: "admin",
  database: "myStore",
});

getPoolConection.on("error", (err, client) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export { getPoolConection };
