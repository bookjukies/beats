
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
        const data = [{name: "ice", title:"cold"}, {name: "king", title:"falcon"}, {name: "kiki", title:"kim kay"}, {name: "big papa", title:"cold nigths"}, {name: "island", title:"fozen sand"}, {name: "bongani", title:"The king"}]
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