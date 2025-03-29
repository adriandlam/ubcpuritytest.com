import { Pool } from "pg";

const pool = new Pool({
	connectionString: process.env.RAILWAY_POSTGRESQL_URL,
	ssl:
		process.env.NODE_ENV === "production"
			? { rejectUnauthorized: false }
			: false,
});

export default pool;