import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
	return knex("items")
		.del()
		.then(() => {
			return knex("items").insert([
				{ title: "lâmpadas", image: "lampadas.svg" },
				{ title: "pilhas/baterias", image: "baterias.svg" },
				{ title: "papéis/papelão", image: "papeis-papelao.svg" },
				{ title: "resíduos eletrõnicos", image: "eletronicos.svg" },
				{ title: "resíduos orgânicos", image: "organicos.svg" },
				{ title: "óleo de cozinha", image: "oleo.svg" },
			]);
		});
}
