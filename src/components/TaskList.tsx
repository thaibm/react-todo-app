import React from 'react';

import { Task } from '../models/task';

interface TaskListProps {
	tasks: Task[];
	onDelete: (task: Task) => void;
}

export class TaskList extends React.Component<TaskListProps, {}> {
	render() {
		return (
			<ul>
				{this.props.tasks.map(task => (
					<li>
						{task.name}
						<button onClick={this.props.onDelete.bind(this, task)}>
							x
						</button>
					</li>
				))}
			</ul>
		);
	}
}
