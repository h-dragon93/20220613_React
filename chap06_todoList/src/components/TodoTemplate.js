import React, { useCallback, useRef, useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const makeTodo = () => {
    const todos = [];
    for(let i = 1; i <= 5000; i++) {
        todos.push( {id: i, text: `${i}번째 할 일`, done: false} );
    }
    return todos;
}

const TodoTemplate = () => {

    const [todoList, setTodoList] = useState(makeTodo());
    const cnt = useRef(6);

    // const updateTodo = id => setTodoList( todoList.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo) )
    const updateTodo = useCallback( id => {
        const todos = todoList.map(todo => {
            if (todo.id === id) {
                return {...todo, done: !todo.done}
            } else {
                return todo;
            }
        });
        setTodoList(todos);
    }, [todoList]);

    const deleteTodo = useCallback( id => setTodoList( todoList.filter(todo => todo.id !== id) ), [todoList]);

    const addTodo = useCallback(text => {
        const todo = {id: cnt.current++, text: text, done: false};
        setTodoList(todoList.concat(todo));
    }, [todoList]);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoForm addTodo={addTodo}></TodoForm>
            <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo}></TodoList>
        </div>
    )
}
export default TodoTemplate;