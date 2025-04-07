import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

export async function query(queryString: string, params: any = undefined) {
  try {
    const result = await pool.query(queryString, params);
    return result.rows;
  } catch (err) {
    console.error('Database error:', err);
    throw err;
  }
}