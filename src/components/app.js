import React from 'react';
import TodosList from './todo-list.js';
import CreateTodo from './create-todo.js';

const todos = [
	{
		task: 'make React tutorial',
		isCompleted: false
	},
	{
		task: 'eat dinner',
		isCompleted: true
	}
];

export default class App extends React.Component{

	constructor(props) {
		super(props);

		this.state={
			todos
		};
	}

	render(){
		return(
			<div>
				<h1>React ToDos Here!</h1>
				<CreateTodo />
				<TodosList todos={this.state.todos} />
			</div>
		);
	}
}