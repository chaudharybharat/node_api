 const mongoose = require("mongoose");

 const connectDb =async () => {
  
    try{
      const connect =await mongoose.connect(process.env.CONNECTION_STRING_MONGO);
      console.log("Database connected successfully"+connect.connection.host,
        connect.connection.name
      );
    }catch(erro){
      console.log("===Error==="+erro);
    }


 };

module.exports =connectDb;




















// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.CONNECTION_STRING_MONGO;
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
//  let collection;
// const connectDb = async () => {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//    const connnect= await client.db("admin").command({ ping: 1 });

//    const database = client.db(process.env.DB_NAME);
//     collection = database.collection(process.env.DBCOLLECTION_NAME);
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// };


// //run().catch(console.dir);
// //export default { connectDb,collection: collection } 
// module.exports= { connectDb };



