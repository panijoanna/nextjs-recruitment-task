"use server";
import { Pool } from "pg";

type QueryParam = string | number | boolean | Date | null;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

export const query = async (text: string, params?: QueryParam[]) => {
  const client = await pool.connect();

  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
};

export const getUsers = async (page: number, perPage: number) => {
  const offset = (page - 1) * perPage;
  const queryText = `
    SELECT id, first_name, last_name
    FROM users
    LIMIT $1 OFFSET $2
  `;
  const result = await query(queryText, [perPage, offset]);
  return result.rows;
};

export const getUsersCount = async () => {
  const queryText = "SELECT COUNT(*) FROM users";
  const result = await query(queryText);
  return parseInt(result.rows[0].count, 10);
};

export const getUserAddresses = async (userId: number) => {
  const queryText = `
    SELECT address_type, valid_from, post_code, city, country_code, street, building_number
    FROM users_addresses
    WHERE user_id = $1
  `;
  const result = await query(queryText, [userId]);
  return result.rows;
};
