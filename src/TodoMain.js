import React from 'react'
import TodoItem from './TodoItem'
import todosDataq from './todosData'

function TodoMain() {
    const todoItemComponents = todosDataq.map(item => {
            return (
                <TodoItem item ={item} key = {item.id} />
            )
        })

    return (
        <div className = "list">
            {todoItemComponents}
        </div>
    )
}

export default TodoMain