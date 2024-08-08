import { useState } from "react"

export function CreateTodo(){

    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");


    return <div>

    <input style={{
        padding : 5 , 
        margin : 5 , 
        borderRadius : 5
    }}  type="text" placeholder="title" onChange={function(e){
        setTitle(e.target.value);
    }} ></input> <br></br> <br></br>
    


    <input  style={{
        padding : 5 , 
        margin : 5 , 
        borderRadius : 5
    }} type="text" placeholder="description" onChange={function(e){
        setDescription(e.target.value);
    }} ></input> <br></br> <br></br>

    <button onClick={()=>{
        fetch("http://localhost:3000/todos" , {
            method : "POST" , 
            body : JSON.stringify({
                title : title,
                description : description,
                completed : false
            }),
            headers : {
                "Content-Type": "application/json"

            }
        })
            .then(async function(res){
                const json = await res.json();
                alert("todo added")
            })
    }}>Add a todo</button>

    </div>
}