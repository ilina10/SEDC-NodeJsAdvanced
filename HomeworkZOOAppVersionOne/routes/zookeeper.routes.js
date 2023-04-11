import express from "express";
import ZookeeperController from "../controllers/zookeeper.controller.js";
import zookeeperValidator from "../middlewares/zookeeper-validator.middleware.js";
const router = express.Router();

router.get("/", ZookeeperController.gelAllZookeepers);
router.post("/", zookeeperValidator, ZookeeperController.addZookeeper);
router.put("/:id", ZookeeperController.updateZookeeper);
router.delete("/:id", ZookeeperController.deleteZookeeper);

export default router;
