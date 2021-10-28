const prisma = require("../../utils/database");

const getAllTags = async(req, res) => { 

    console.log("req.body ", req.body)
    
    try{
        const allTags = await prisma.tag.findMany()
        console.log("allTags", allTags)
        res.json(allTags)
    } catch(error) { 
        res.status(500).json({error : error.message})
    }

}

module.exports = { getAllTags }