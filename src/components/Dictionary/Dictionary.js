import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";
import "./Dictionary.css";

const Dictionary = () => {
	const [searchWord, setSearchWord] = useState("");
	const [data, setData] = useState("");

	const fetchData = async () => {
		try {
			const response = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
			);
			const result = await response.json();
			setData(result[0]);
		} catch (error) {
			console.log(`error - ${error}`);
		}
	};

	const handleSearch = () => {
		fetchData();
	};

	const playAudio = () => {
		let audio = new Audio(data.phonetics[0].audio);
		audio.play();
	};

	console.log(`searchWord - ${searchWord}`);

	return (
		<div className='container'>
			<h1 className='title'>Simple Dictionary</h1>
			<div className='inputField'>
				<input
					type='text'
					placeholder='pls eneter the word...'
					defaultValue={searchWord}
					onBlur={(e) => setSearchWord(e.target.value)}
				/>
				<button type='button' onClick={() => handleSearch()}>
					<FaSearch />
				</button>
			</div>
			{data && (
				<div className='meaningSection'>
					<h4>Word: </h4>
					<p>
						{data.word}
						<FcSpeaker size='20px' onClick={playAudio} />
					</p>
					<h4>Defination:</h4>
					<p>{data.meanings[0].definitions[0].definition}</p>
					<h4>Parts of speech:</h4>
					<p>{data.meanings[0].partOfSpeech}</p>
					<h4>Example:</h4>
					<p>{data.meanings[0].definitions[0].example}</p>
				</div>
			)}
		</div>
	);
};

export default Dictionary;
