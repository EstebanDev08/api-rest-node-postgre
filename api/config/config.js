import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  keyJwt: process.env.KEY_TOKEN_JWT,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPass: process.env.SMTP_PASS,
};

export { config };
