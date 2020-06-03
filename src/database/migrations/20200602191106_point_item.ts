import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
	return knex.schema.createTable("point_item", (table) => {
		table.integer("point_id").references("id").inTable("points");
		table.integer("item_id").references("id").inTable("items");
	});
}

export async function down(knex: Knex): Promise<any> {
	return knex.schema.dropTable("point_item");
}
