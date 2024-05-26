import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  bd_name: process.env.DB_NAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  db_url: process.env.DATABASE_URL,
};
