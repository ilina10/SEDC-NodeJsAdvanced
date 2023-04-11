import { getDb } from "../db/mongo-connection.js";
import { ObjectId } from "mongodb";
export default class ZookeeperModel {
  static async gelAllZookeepers() {
    const collection = await getDb().collection("zookeepers");
    const zookeepers = await collection.find().toArray();
    console.log(`All zookeepers: ${zookeepers}`);
    return zookeepers;
  }
  static async addZookeeper(zookeeper) {
    const collection = await getDb().collection("zookeepers");
    const addedZookeeper = await collection.insertOne(zookeeper);
    console.log("New animal:", addedZookeeper);
    return { _id: addedZookeeper.insertedId, ...zookeeper };
  }
  static async updateZookeeper(zookeeperId, body) {
    const collection = await getDb().collection("zookeepers");
    const result = await collection.updateOne(
      {
        _id: zookeeperId,
      },
      { $set: body }
    );
    return result;
  }
  static async deleteZookeeper(zookeeperId) {
    const collection = await getDb().collection("zookeepers");
    const deletedZookeeper = await collection.deleteOne({
      _id: zookeeperId,
    });
    console.log(deletedZookeeper);
  }
}
