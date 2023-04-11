import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.${process.env.MONGO_SERVER}.mongodb.net/?retryWrites=true&w=majority`;
const uri = `mongodb+srv://jakovcevskailina10:Wir59tdUfHWy7wyn@cluster0.tfu0qkg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
let db;

export const connectedToDatabase = async () => {
  console.log("Connection to Mongo Database...");
  db = await client.db("ZOO");
  console.log("Connected to Mongo Database");
};
export const getDb = () => db;
