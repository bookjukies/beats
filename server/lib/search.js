
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
          { name: "ice", price:300,type: "RNB",title: "cold", cover: "dark.jpg" },
          { name: "king", price:500,type: "Afrobeats",title: "falcon", cover: "donald.jpeg" },
          { name: "kiki", price:700,type: "Hip-hop",title: "kim kay", cover: "jackson.jpeg" },
          { name: "big papa", price:400,type: "POP",title: "cold nigths", cover: "mega.png" },
          { name: "island", price:300,type: "Piano",title: "fozen sand", cover: "palm.jpeg" },
          { name: "bongani", price:900,type: "Trap",title: "The king", cover: "yeh.jpeg" },
        ];
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