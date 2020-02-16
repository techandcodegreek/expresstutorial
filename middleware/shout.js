const shout = (req, res, next)=>{
    console.log(req.originalUrl)
    next()
}

module.exports = shout;