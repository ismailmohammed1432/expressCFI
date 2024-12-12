import express from "express"

const app = express()

const PORT = 5000;

app.use(express.json()) 


app.get("/", (req, res) => {
    try {
        res.send("hello world")
    } catch (error) {
        console.log(error);
    }
})


app.post("/api/register",(req,res)=>{
    try {

      let  userData = req.body
      console.log(userData);
        res.status(200).json(userData)
    } catch (error) {
        console.log(error);
    }
})


app.put("/api/users/:id",(req,res)=>{
    try {
        let userID = req.params.id
        console.log(userID);
        res.status(200).json(userID)
    } catch (error) {
        console.log(error);
    }
})



app.get("/link/:url",(req,res)=> {
    try {
        let userUrl = req.params.url;
        console.log(userUrl);

        res.status(200).redirect(`https://${userUrl}`)
     } catch (error) {
    console.log(error);
    }
})


app.get("/search", (req,res)=>{
    try {
        let query = req.query
        console.log(query);
        res.status(200).json(query)
    } catch (error) {
        console.log(error);
    }
})



app.listen(PORT,()=>{
    console.log(`the server is up and running ${PORT}`);
})