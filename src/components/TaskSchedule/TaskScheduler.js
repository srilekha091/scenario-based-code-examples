import React, { useState } from "react";
import "./TaskScheduler.css";

const TaskScheduler = () => {
	const [task, setTask] = useState("");
	const [priority, setPriority] = useState("");
	const [startDate, setStartDate] = useState("");
	const [tasks, setTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);
	const [isDisabled, setIsDisabled] = useState(false);

	const handleAddTask = (e) => {
		e.preventDefault();
		if (task.trim() === "" || startDate === "") {
			setIsDisabled(true);
			alert("Please enter the task name");
		}

		const selectedDate = new Date(startDate);
		const currentDate = new Date();
		if (selectedDate < currentDate) {
			setIsDisabled(true);
			alert("Please enter a further date");
		}

		const newTask = {
			id: tasks.length + 1,
			task,
			priority,
			startDate,
			done: false,
		};

		setTasks([...tasks, newTask]);
		setTask("");
		setPriority("");
		setStartDate("");

		//console.log(tasks);
	};

	const handleMarkDone = (id) => {
		//console.log("Hi");
		const updatedTasks = tasks.map((t) =>
			t.id === id ? { ...t, done: true } : t
		);
		setTasks(updatedTasks);

		const completedTask = tasks.find((t) => !t.done);
		if (completedTask) {
			setCompletedTasks([...completedTasks, completedTask]);
		}
	};

	const upcomingTasks = tasks.filter((t) => !t.done);

	return (
		<div>
			<header>
				<h1>Task Scheduler</h1>
			</header>
			<main>
				<form className='task-form'>
					<input
						type='text'
						name='taskName'
						placeholder='Enter a task...'
						value={task}
						onChange={(e) => setTask(e.target.value)}
					/>
					<select
						value={priority}
						onChange={(e) => setPriority(e.target.value)}
					>
						<option value=''>--Please choose an option--</option>
						<option value='Low'>Low</option>
						<option value='Medium'>Medium</option>
						<option value='High'>High</option>
					</select>
					<input
						type='date'
						value={startDate}
						placeholder='Please select the date..'
						onChange={(e) => setStartDate(e.target.value)}
					/>
					<button onClick={(e) => handleAddTask(e)} disabled={isDisabled}>
						Add Task
					</button>
					<h2 className='cheading'>Upcoming Tasks</h2>
					<div className='task-list'>
						<table>
							<thead>
								<tr>
									<th>Task Name</th>
									<th>Priority</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								{upcomingTasks.map((task) => (
									<tr key={task.id}>
										<td>{task.task}</td>
										<td>{task.priority}</td>
										<td>{task.startDate}</td>
										<td>
											{!task.done && (
												<button
													type='submit'
													className='mark-done'
													onClick={() => handleMarkDone(task.id)}
												>
													Mark as Done
												</button>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<h2 className='cheading'>Completed Tasks</h2>
					<div className='completed-task-list'>
						<table>
							<thead>
								<tr>
									<th>Task Name</th>
									<th>Priority</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								{completedTasks.map((ct) => (
									<tr key={ct.id}>
										<td>{ct.task}</td>
										<td>{ct.priority}</td>
										<td>{ct.startDate}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</form>
			</main>
		</div>
	);
};

export default TaskScheduler;
