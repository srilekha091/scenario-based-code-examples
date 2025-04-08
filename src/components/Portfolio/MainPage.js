import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Resume from "./Pages/Resume";
import NavBar from "./NavBar";

const MainPage = () => {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' index element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/resume' element={<Resume />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default MainPage;
