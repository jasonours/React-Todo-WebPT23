import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todoName: ''
        }
    }

    handleChanges = e => {
        this.setState({ todoName: e.target.value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoName);
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} value={this.todoName} type="text" name="todo" />
                <button>Add Todo</button>
            </form>
        );
    };
}

export default TodoForm;