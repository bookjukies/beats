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
    { name: "ice", price:300,type: "RNB",producer: "cold", cover: "tyler.jpeg", url: "/bored.mp3" },
    { name: "king", price:300,type: "Afrobeats",producer: "falcon", cover: "donald.jpg" , url: "/cool.mp3" },
    { name: "kiki", price:300,type: "Hip-hop",producer: "kim kay", cover: "jackson.jpeg" , url: "/foh.mp3"  },
    { name: "relaxed", price:300,type: "POP",producer: "cold nigths", cover: "mega.png" , url: "/relaxed.mp3"  },
    { name: "island", price:300,type: "Piano",producer: "fozen sand", cover: "palm.jpg"  , url: "/meat.mp3" },
    { name: "risk", price:300,type: "Trap",producer: "The king", cover: "dark.jpg"  , url: "/risk.mp3" },
    { name: "abstract", price:300,type: "POP",producer: "cold", cover: "astro.jpeg", url: "/abstract.mp3" },
    { name: "deep", price:300,type: "Afrobeats",producer: "cold", cover: "savage.jpeg" , url: "/deep.mp3" },
    { name: "futuristic", price:300,type: "RNB",producer: "kim kay", cover: "star.jpeg" , url: "/futuristic.mp3"  },
    { name: "good", price:300,type: "POP",producer: "cold nigths", cover: "blond.jpeg" , url: "/good.mp3"  },
    ]
  res.json(data)
})

app.get("/api/" ,async (req, res) => {
  const data =  [
    { name: "ice", price:300,type: "RNB",producer: "cold", cover: "tyler.jpeg", url: "/bored.mp3" },
    { name: "king", price:300,type: "Afrobeats",producer: "falcon", cover: "donald.jpg" , url: "/cool.mp3" },
    { name: "kiki", price:300,type: "Hip-hop",producer: "kim kay", cover: "jackson.jpeg" , url: "/foh.mp3"  },
    { name: "relaxed", price:300,type: "POP",producer: "cold nigths", cover: "mega.png" , url: "/relaxed.mp3"  },
    { name: "island", price:300,type: "Piano",producer: "fozen sand", cover: "palm.jpg"  , url: "/meat.mp3" },
    { name: "risk", price:300,type: "Trap",producer: "The king", cover: "dark.jpg"  , url: "/risk.mp3" },
    { name: "abstract", price:300,type: "POP",producer: "cold", cover: "astro.jpeg", url: "/abstract.mp3" },
    { name: "deep", price:300,type: "Afrobeats",producer: "cold", cover: "savage.jpeg" , url: "/deep.mp3" },
    { name: "futuristic", price:300,type: "RNB",producer: "kim kay", cover: "star.jpeg" , url: "/futuristic.mp3"  },
    { name: "good", price:300,type: "POP",producer: "cold nigths", cover: "blond.jpeg" , url: "/good.mp3"  },
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