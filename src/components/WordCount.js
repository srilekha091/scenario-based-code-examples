import React, { useState } from "react";

const WordCount = () => {
	const [text, setText] = useState("");
	const wordCount = text
		.trim()
		.split(/\s+/)
		.filter((word) => word != "").length;
	const letterCount = text.length;

	const handleChange = (e) => {
		e.preventDefault();
		setText(e.target.value);
	};

	return (
		<div>
			<div className='title'>
				<h1>Geeks for Geeks</h1>
				<h3>Words and Letters Count</h3>
			</div>
			<div className='textArea'>
				<textarea
					name='text'
					rows={6}
					cols={40}
					value={text}
					onChange={(e) => handleChange(e)}
				></textarea>
				<p>Word Count: {wordCount}</p>
				<p>Letter Count: {letterCount}</p>
			</div>
		</div>
	);
};

export default WordCount;
