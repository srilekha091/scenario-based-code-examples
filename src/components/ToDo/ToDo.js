import React, { useState, useRef } from "react";
import "./ToDo.css";

const ToDo = () => {
	const [list, setList] = useState("");
	const [items, setItems] = useState([]);
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		setItems((items) => [...items, list]);
		inputRef.current.value = "";
	};

	const handleUpdateToDo = (id) => {
		//items.filter((item) => item.id == id);
		//setItems([...items], )
	};

	const handleEdit = (id) => {
		console.log(`${id} inside edit comp`);
		return (
			<div>
				<form className='editForm'>
					<input type='text' placeholder='pls update the todo item...' />
					<button onClick={(id) => handleUpdateToDo(id)}>Update Todo</button>
				</form>
			</div>
		);
	};

	const handleDelete = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	return (
		<div className='toDoContainier'>
			<div className='inputSection'>
				<h1 className='header'>To-Do List</h1>
				<form className='toDoFormSection' onSubmit={handleSubmit}>
					<label htmlFor='text' className='listLabel'>
						<h3>Please enter the to-dos:</h3>
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
					<button type='submit'>Submit</button>
				</form>
				<hr />
			</div>
			<div className='toDoWrapper'>
				<ol>
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
				</ol>
			</div>
		</div>
	);
};

export default ToDo;
