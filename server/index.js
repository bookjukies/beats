//    require
const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000
const search = require("./lib/search")


//global middlewares
app.use(express.json())
app.use(cors({origin: "*"}))

//    async (req, res) => {}
//    req


app.get("/", search ,async (req, res) => {
  const data =  [
    { name: "ice", price:300,type: "RNB",title: "cold", cover: "tyler.jpeg" },
          { name: "king", price:500,type: "Afrobeats",title: "falcon", cover: "donald.jpg" },
          { name: "kiki", price:700,type: "Hip-hop",title: "kim kay", cover: "jackson.jpeg" },
          { name: "big papa", price:400,type: "POP",title: "cold nigths", cover: "mega.png" },
          { name: "island", price:300,type: "Piano",title: "fozen sand", cover: "palm.jpg" },
          { name: "bongani", price:900,type: "Trap",title: "The king", cover: "dark.jpg" },
  ]

  res.json(data)
})

app.get("/api/" ,async (req, res) => {
  const data =  [
    { name: "ice", price:300,type: "RNB",title: "cold", cover: "tyler.jpeg" },
          { name: "king", price:500,type: "Afrobeats",title: "falcon", cover: "donald.jpg" },
          { name: "kiki", price:700,type: "Hip-hop",title: "kim kay", cover: "jackson.jpeg" },
          { name: "big papa", price:400,type: "POP",title: "cold nigths", cover: "mega.png" },
          { name: "island", price:300,type: "Piano",title: "fozen sand", cover: "palm.jpg" },
          { name: "bongani", price:900,type: "Trap",title: "The king", cover: "dark.jpg" },
  ]
  res.json(data)
})

app.post("/api/:term" ,async (req, res) => {
  const results = await req.results
  res.send(results)

})

app.get("/api/:term" , search, async (req, res) => {
  try {
    const data = req.results
    res.status(200).json(data)
    
  } catch (error) {
    res.status(404) 
  }
})




app.listen(PORT, () =>{
  console.log(`The app is running on port : ${PORT}`);
})