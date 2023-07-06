import { Client } from "pg";

const getConection = async () => {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_password,
    database: process.env.DB_NAME,
  });

  await client.connect();

  return client;
};

export { getConection };
