import { useState } from "react"

export function Todos({todos , setTodos}){


    const handleMarkAsComplete = async (todoId) => {
        try {
            const response = await fetch("http://localhost:3000/completed", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ _id: todoId })
            });
            const data = await response.json();
    
            if (response.ok) {
                // Update the local state to reflect the change
                const updatedTodos = todos.map(todo =>
                    todo._id === todoId ? { ...todo, completed: true } : todo
                );
                setTodos(updatedTodos);
            } else {
                console.error(data);
            }
        } catch (error) {
            console.error("Failed to update todo", error);
        }
    };
    return (
        <div>

        {todos.map(function(todo){
           return  <div>
                <h2>{todo.title}</h2>
                <h2>{todo.description}</h2>
                <button onClick={() => handleMarkAsComplete(todo._id)}>
                        {todo.completed ? "Completed" : "Mark as Complete"}
                </button>
            </div>
        })}


    </div>
    )
}