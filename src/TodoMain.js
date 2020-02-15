import React from 'react'
import TodoItem from './TodoItem'
import todosDataq from './todosData'
import todosData from './todosData'

class TodoMain extends React.Component {
    constructor() {
        super()
        this.state = {
            dataArray: todosData
        }
    }


    render() {
        const todoItemComponents = this.state.dataArray.map(item => {
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
}

export default TodoMain