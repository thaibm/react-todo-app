import React, { Component } from 'react';

import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { Task } from './models/task';

interface AppState {
	newTask: Task;
	tasks: Task[];
}

class App extends Component<{}, AppState> {
	state: AppState = {
		newTask: {
			id: 1,
			name: ''
		},
		tasks: []
	};

  private	addTask = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		this.setState(prevState => ({
			newTask: {
				id: prevState.newTask.id + 1,
				name: ''
			},
			tasks: [...prevState.tasks, prevState.newTask]
		}));
	};

	private deleteTask = (taskToDelete: Task) => {
		this.setState(prevState => ({
			tasks: [
				...prevState.tasks.filter(task => task.id !== taskToDelete.id)
			]
		}));
	};

  private	handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			newTask: {
				...this.state.newTask,
				name: event.target.value
			}
		});
	};

	render() {
		return (
			<div>
				<h1>Wellcome to React-Typescript Todo App</h1>
				<TaskForm
					task={this.state.newTask}
					onAdd={this.addTask}
					onChange={this.handleTaskChange}
				/>
				<TaskList tasks={this.state.tasks} onDelete={this.deleteTask} />
			</div>
		);
	}
}

export default App;
