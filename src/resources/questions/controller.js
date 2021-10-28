const prisma = require("../../utils/database")

async function getAllQuestions(req, res) { 

    console.log("req.body: ", req.body);

    try{ 
        const questions = await prisma.question.findMany()


        res.json(questions)
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

async function addOneQuestion(req, res) { 

    console.log("req.body addOneQuestion: ", req.body);
  
    const id = req.params.id
  
    const { title, body, } = req.body;
  
    try{ 

    // TO ADD TAGS FEATURE
        const newQuestion = await prisma.question.create({
            data : { 
                title,
                body,
                userId : parseInt(id)
            }, 
            include : { 
                tags : true
            }
        })
        res.json({ resposne : newQuestion})
    } catch(error) { 
  
        res.status(500).json({ error : error.message})
    }
  
  }

module.exports = {getAllQuestions, getQuestionById, addOneQuestion}


