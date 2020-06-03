import express from "express";

import PointsController from "./controllers/Points";
import ItemsController from "./controllers/Items";

const routes = express.Router();

routes.get("/points", PointsController.index);
routes.get("/points/:id", PointsController.show);
routes.post("/points", PointsController.create);

routes.get("/items", ItemsController.index);

export default routes;
