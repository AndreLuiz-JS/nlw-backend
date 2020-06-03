module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./src/database/development.sqlite3",
		},
		migrations: {
			directory: "./src/database/migrations",
		},
		seeds: {
			directory: "./src/database/seeds",
		},
		useNullAsDefault: true,
	},

	production: {
		client: "postgresql",
		connection: {
			database: process.env.POSTGRE_DATABASE,
			user: process.env.POSTGRE_USER,
			password: process.env.POSTGRE_USER,
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: "./src/database/migrations",
		},
		seeds: {
			directory: "./src/database/seeds",
		},
	},
};
