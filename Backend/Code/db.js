const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://nikhildelhi8:Nikhim%4090@cohertcluster.gg9qaxh.mongodb.net/TodoApp")


const todoSchema = mongoose.Schema({
    title : String , 
    description : String , 
    completed : Boolean 
})

const todo = mongoose.model("Todo" , todoSchema);

module.exports = {
    todo
}