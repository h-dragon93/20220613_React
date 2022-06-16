
import React, { memo } from 'react'
import './css/todos.css'

function TodoListItem(props) {
    
    const {todo, updateTodo, deleteTodo} = props;

    return (
        <tr>
            <td>{todo.id}</td>
            <td><span className={todo.done ? 'done' : ''}>{todo.text}</span></td>
            <td>
                <button className="btn btn-primary" onClick={() => updateTodo(todo.id)}>Complete</button>
            </td>
            <td>
                <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </td>
        </tr>
    )
}
// props로 받은 값이 VD의 값과 동일하면 이전의 VD의 값을 그대로 사용
export default memo(TodoListItem)
