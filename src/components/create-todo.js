import React from 'react';

export default class CreateTodo extends React.Component{
	render(){
		return(
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type="text" placeholder="What do I need to do today?" size="29" ref="createInput"/>
				<button>Create</button>
			</form>
		);
	}

	handleCreate(){
		
	}
}