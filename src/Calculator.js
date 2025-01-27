import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
	const [text, setText] = useState("");
	const [result, setResult] = useState("gvhgvn");

	const logicsBtnColor = "#FFA500";

	const handleClick = (val) => {
		console.log(val);
		// setText((text) => [...text, val + " "]);
	};

	return (
		<div className='appSection'>
			<div className='appTitle'>Basic Calculator App</div>
			<div className='inputSection'>
				<div className='resultSection'>{result}</div>
				<div className='userInput'>{text}</div>
			</div>
			<div className='keypadSection'>
				<div className='numRow'>
					<input
						type='button'
						value='7'
						className='btn'
						onClick={handleClick(7)}
					/>
					<input type='button' value='8' className='btn' />
					<input type='button' value='9' className='btn' />
					<input
						type='button'
						value='x'
						className='btn'
						style={{ background: logicsBtnColor }}
					/>
				</div>
				<div className='numRow'>
					<input type='button' value='4' className='btn' />
					<input type='button' value='5' className='btn' />
					<input type='button' value='6' className='btn' />
					<input
						type='button'
						value='-'
						className='btn'
						style={{ background: logicsBtnColor }}
					/>
				</div>
				<div className='numRow'>
					<input type='button' value='1' className='btn' />
					<input type='button' value='2' className='btn' />
					<input type='button' value='3' className='btn' />
					<input
						type='button'
						value='+'
						className='btn'
						style={{ background: logicsBtnColor }}
					/>
				</div>
				<div className='numRow'>
					<input
						type='button'
						value='Clear'
						className='btn'
						style={{ background: logicsBtnColor }}
					/>
					<input type='button' value='0' className='btn' />
					<input
						type='button'
						value='='
						className='btn'
						style={{ background: logicsBtnColor }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
