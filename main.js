import express from "express"
import movieRoute from "./Routes/moviesRoutes.js"
import connectDB from "./lib/db.js"

const app = express()
const PORT = 6969

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB();

app.get("/", (req,res) => {
    res.json({
        msg : "i am gokul",
        title: "enter your data",
        desc: "this site is made using mern stack use this input strecture to use this url /movies"

    })
})

app.use("/movies" , movieRoute)

app.listen(PORT, ()=>{
    console.log(`server is running on https://loalhost:${PORT}`)
})