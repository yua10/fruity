const logger = (req, res, next)=> {
    console.log(req.method, req.originalUrl)
    next()
}

//need next param to alllow it to pass through it 



module.exports = logger