import React, { useState, useRef } from "react";
import "./ToDo.css";

const ToDo = () => {
	const [list, setList] = useState("");
	const [items, setItems] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		setItems((items) => [...items, list]);
		inputRef.current.value = "";
	};

	const handleEdit = () => {
		// return(
		// 	<form>
		// 		<input type="text" placeholder="pls update the list" onBlur={() => }/>
		// 	</form>
		// )
	};

	const handleDelete = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return (
		<div className='toDoAppSection'>
			<div className='header'>
				<h2>To-Do List</h2>
				<form>
					<label htmlFor='text' className='listLabel'>
						Please enter the to-dos:
					</label>
					<br />
					<input
						type='text'
						placeholder='add to-do...'
						defaultValue={list}
						ref={inputRef}
						onBlur={(e) =>
							setList({ id: items.length + 1, todoItem: e.target.value })
						}
					/>
					<button type='button' onClick={handleSubmit}>
						Submit
					</button>
				</form>
				<hr />
			</div>
			<div className='toDoList'>
				<ul>
					{items.map((item) => {
						return (
							<li key={item.id}>
								{item.todoItem}
								<button type='button' onClick={() => handleEdit(item.id)}>
									Edit
								</button>
								<button type='button' onClick={() => handleDelete(item.id)}>
									Delete
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default ToDo;
