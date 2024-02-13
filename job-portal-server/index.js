const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
require('dotenv').config()


// middleware
app.use(express.json())
app.use(cors())

// username : adarshjain0508
// password : abz5MBfzredOkcM9


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Password}@jobportal.qtnizfy.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    // create db
    const db = client.db("JobPortal");
    const jobCollections = db.collection("demo_jobs")

    // get all jobs
    app.get('/all-jobs',async(req,res)=>{
        const jobs = await jobCollections.find().toArray()
        res.send(jobs)
    })

    // post a job
    app.post('/post-job',async(req,res)=>{
        const body = req.body;
        body.createAt = new Date();
        // console.log(body)
        const result = await jobCollections.insertOne(body)
        if(result.insertedId){
            res.status(200).send(result)
        }
        else {
            res.status(404).send({
                message:"Can't Insert. Please Try Again",
                status:false
            })
        }

    })

    // get jobs by email
    app.get('/myJobs/:email',async(req,res)=>{
        const myJobs = await jobCollections.find({postedBy:req.params.email}).toArray()
        res.send(myJobs)
    })

    // delete a job
    app.delete('/job/:id',async(req,res)=>{
        const id = req.params.id
        // first make an ObjectId of given params
        const query = {
            _id:new ObjectId(id)
        }
        // now delte based on query
        const deletedJob = await jobCollections.deleteOne(query)
        res.send(deletedJob)
    })

    // api for getting a single job using id
    app.get('/all-jobs/:id',async(req,res)=>{
        const id = req.params.id
        const newObjectId = new ObjectId(id);
        // findOne is necessary here , find gives an error
        const job = await jobCollections.findOne({_id: newObjectId})
        res.send(job)

    })

    // update job
    app.patch('/update-job/:id',async(req,res)=>{
        const id = req.params.id;
        const jobBody = req.body;
        const filter = {_id: new ObjectId(id)}
        const options = {upsert:true}
        const updateDoc = {
            $set:{
                ...jobBody
            }
        }
        const result = await jobCollections.updateOne(filter,updateDoc,options)
        res.status(200).send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello Developer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})