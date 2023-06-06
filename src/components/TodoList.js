import React from 'react'
import TodoItem from './TodoItem'

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className='list'>
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
                return (
                    <TodoItem  
                        // id={todo.id}
                        // completed={todo.completed}
                        // title={todo.title}
                        // key={todo.id}
                        {...todo}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoList
