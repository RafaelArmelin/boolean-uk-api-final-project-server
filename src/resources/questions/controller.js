const prisma = require("../../utils/database")

async function getAllQuestions(req, res) { 

    console.log("req.body: ", req.body);

    try{ 
        const allQuestions = await prisma.question.findMany()


        res.json({response : allQuestions})
    } catch(error) { 
        console.error(); 

        res.status(500).json({ error: error.message})
    }

}

async function getQuestionById(req, res){ 

    const id = req.params.id; 
    console.log("id: ",id)

    try{ 

        const questionById = await prisma.question.findUnique({ 
            where: { 
                id: parseInt(id)
            }
        })

        res.json({ response : questionById})

    }catch(error){ 

        res.status(500).json({ error : error.message})
    }

}


module.exports = {getAllQuestions, getQuestionById}


