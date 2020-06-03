import knex from "../database/connection";
import { Request, Response } from "express";

export default {
	async index(req: Request, res: Response) {
		const { city, uf, items } = req.query;

		const parsedItems = String(items)
			.split(",")
			.filter((item) => Number(item.trim()));

		const points = await knex("points")
			.join("point_item", "points.id", "=", "point_item.point_id")
			.whereIn("point_item.item_id", parsedItems)
			.where("city", String(city))
			.where("uf", String(uf))
			.distinct()
			.select("points.*");

		return res.json(points);
	},
	async show(req: Request, res: Response) {
		const { id } = req.params;

		const point = await knex("points").select("*").where("id", id).first();

		if (!point) return res.status(404).json({ error: "Point not found." });

		const response = await knex("items")
			.join("point_item", "items.id", "=", "point_item.item_id")
			.where("point_item.point_id", id)
			.select("items.title");
		const items = response.map((item) => item.title);
		return res.json({ point, items });
	},
	async create(req: Request, res: Response) {
		const {
			image,
			name,
			email,
			whatsapp,
			city,
			uf,
			latitude,
			longitude,
			items,
		} = req.body;
		if (
			!image ||
			!name ||
			!email ||
			!whatsapp ||
			!city ||
			!uf ||
			!latitude ||
			!longitude
		)
			return res.status(400).json({ error: "All fields required." });
		try {
			const trx = await knex.transaction();

			const [pointId] = await trx("points").insert({
				image,
				name,
				email,
				whatsapp,
				city,
				uf,
				latitude,
				longitude,
			});
			const point_item = items.map((item: String) => {
				return { point_id: pointId, item_id: Number(item) };
			});
			await trx("point_item").insert(point_item);

			await trx.commit();
			return res.json({ pointId });
		} catch (err) {
			console.log(err);
			return res.status(400).json({ error: "Database error." });
		}
	},
};
