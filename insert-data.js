const { MongoClient } = require("mongodb");
                                                                                                                                    
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "test";
                      
 async function run() {
     //commenting out exercise
    // try {
    //      await client.connect();
    //      console.log("Connected correctly to server");
    //      const db = client.db(dbName);

    //      // Use the collection "cars"
    //      const col = db.collection("cars");


    //     const data = require("./src/data.json")

    //      const p = await col.insertMany(data);

    //      const myDoc = await col.findOne();
    //      console.log(myDoc);

    //     } catch (err) {
    //      console.log(err.stack);
    //  }
 
    //  finally {
    //     await client.close();
    // }
}

run().catch(console.dir);