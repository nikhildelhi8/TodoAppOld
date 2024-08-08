const express = require("express")
const app = express();
const cors = require("cors");
const {todo} = require('./db');
const {createTodo , updateTodo} = require('./types')


app.use(express.json());
app.use(cors());


app.get("/todos" , async(req ,res)=>{

    const todos = await todo.find();

    if(todos== undefined){
        res.status(404).send("Not able to fetch existing todos");
    }

    if(todos.length == 0){
        res.status(400).send("No todo is added")
    }

    return res.status(200).json({todos});
})

app.post('/todos' , async(req , res)=>{

    
    const createPayload = req.body;


    //input validation

    const isCorrect  = createTodo.safeParse(createPayload);

    if(!isCorrect.success){
        return res.status(400).send("enter correct inputs")
    }

    try{

        await todo.create({
            title : createPayload.title , 
            description : createPayload.description, 
            completed : false
        })
        return res.status(200).send("todo created successfully");
    }
    catch(e){
        return res.status(400).send("some error occured");

    }
})

app.put("/completed", async(req , res)=>{

    
    const updatePayload = req.body; 

    const isCorrectId = updateTodo.safeParse(updatePayload);

    if(!isCorrectId.success)
        return res.status(404).send("input is not correct")

    
    console.log(updatePayload._id);


    try{

        await todo.updateOne({
            _id : updatePayload._id
        },{$set : {
            completed : true
        }})
        res.json({
            msg : "todo marked as completed"
        })

    }
    catch(e){
        return res.json(404).send("not able to update id , error occured")

    }
})

app.listen(3000 , ()=>{
    console.log("servfer is runnign on port 3000")
})


