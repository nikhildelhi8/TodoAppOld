const z = require("zod");


const createTodo = z.object({

    title : z.string() ,
    description : z.string()
})

const updateTodo = z.object({
    _id : z.string()
})


module.exports = {
    createTodo : createTodo , 
    updateTodo :  updateTodo
}




