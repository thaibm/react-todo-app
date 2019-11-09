import React from 'react';

import { Task } from '../models/task';


interface TaskFormProps {
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
	task: Task;
}


export class TaskForm extends React.Component<TaskFormProps, {}> {
	render() {
		return (
			<form onSubmit={this.props.onAdd}>
				<input onChange={this.props.onChange} value={this.props.task.name} />
				<button type='submit'>Add a task</button>
			</form>
		);
	}
}
