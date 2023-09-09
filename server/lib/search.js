
// makes lowercase and trim
const treat = (param) =>{
    const treated = param.toLowerCase().trim()
    return treated
}
//finds the terms
const findItems = (record, searchTerm ) => {
    return treat(record.name).startsWith(treat(searchTerm))
}

const search = async (req, res, next) =>{
    //you attetch to database
    try {
        const data = [
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
        const {term} = req.params
        const filtered = await data.filter( enty => findItems(enty, term))
        req.results = await filtered
        next()
        
    } catch (error) {
        console.log(error)
        next()
    }
}

module.exports = search