import { Router } from "express";
import zookeeperRoutes from "./routes/zookeeper.routes.js";
import animalRoutes from "./routes/animal.routes.js";
const router = Router();

//Zookeeper routes
router.use("/zookeepers", zookeeperRoutes);

//Animal routes
router.use("/animals", animalRoutes);

export default router;
