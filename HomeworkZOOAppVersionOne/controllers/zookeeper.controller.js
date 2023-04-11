import ZookeeperModel from "../models/zookeepers.model.js";
export default class ZookeeperController {
  static async gelAllZookeepers(req, res) {
    try {
      const allZookeepers = await ZookeeperModel.gelAllZookeepers();
      res.status(200).send(allZookeepers);
    } catch (err) {
      res.status(500).send({ message: "Error while getting all Zookeepers" });
      console.log(err);
    }
  }
  static async addZookeeper(req, res) {
    try {
      const zookeeper = await ZookeeperModel.addZookeeper(req.body);
      res.status(200).send(zookeeper);
    } catch (error) {
      res.status(500).send({ message: "Error while adding zookeeper" });
      console.log(error);
    }
  }
  static async updateZookeeper(req, res) {
    try {
      const zookeeper = await ZookeeperModel.updateZookeeper(
        req.params.id,
        req.body
      );
      res.status(200).send(zookeeper);
    } catch (error) {
      res.status(500).send({ message: "Error while updating zookeeper" });
      console.log(error);
    }
  }
  static async deleteZookeeper(req, res) {
    try {
      await ZookeeperModel.deleteZookeeper(req.params.id);
      res.sendStatus(200);
    } catch (err) {
      res.status(500).send({ message: "Error while deleting zookepeer" });
      console.log(err);
    }
  }
}
