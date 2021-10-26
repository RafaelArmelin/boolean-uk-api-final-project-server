const prisma = require("../../utils/database");

const getAllTags = async(req, res) => { 

    console.log("req.body ", req.body)
    
    try{
        const allTags = await prisma.tag.findMany()
        console.log("allTags", allTags)
        res.json({ response: allTags})
    } catch(error) { 
        res.status(500).json({erro : error.message})
    }

}

module.exports = { getAllTags }