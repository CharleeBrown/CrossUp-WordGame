const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://lee:"+process.env.DB_PASSWORD+"@cluster0.guc9f.mongodb.net/"+process.env.DB_NAME+"?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
	const db = client.db("crossUpDB"); 
	const coll = db.collection("challengeWords");
  // perform actions on the collection object
  client.close();
});