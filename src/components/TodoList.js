import React from 'react';

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todolist">
            {props.todo.map(todo => (
                <Todo toggleTodo={props.toggleTodo} key={todo.id} todo={todo} />
            ))}
            <button className="clear-btn" onClick={e => props.clearTodo()}>
                Clear Todo
            </button>
        </div>
    );
};

export default TodoList;