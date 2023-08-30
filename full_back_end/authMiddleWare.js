
const test = (req, res, next) =>{
    //the idea is destructure and validate using this middleware

    console.log(req.customProperty);
 

    next()

}

module.exports = test