import knex from "knex";
import path from "path";

const client = process.env.NODE_ENV === "production" ? "postgresql" : "sqlite3";
const connection =
	process.env.NODE_ENV === "production"
		? {
				database: process.env.POSTGRE_DATABASE,
				user: process.env.POSTGRE_USER,
				password: process.env.POSTGRE_USER,
		  }
		: {
				filename: path.resolve(__dirname, "development.sqlite3"),
		  };

const db = knex({
	client,
	connection,
	useNullAsDefault: true,
});

export default db;
