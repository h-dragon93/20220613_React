
import React from 'react'
import './css/todos.css';
import TodoListItem from './TodoListItem'

function Todolist(props){

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{width:'10%'}}>ID</th>
                        <th>Todo</th>
                        <th style={{width:'10%'}}>Complete</th>
                        <th style={{width:'10%'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    )
}
export default Todolist;