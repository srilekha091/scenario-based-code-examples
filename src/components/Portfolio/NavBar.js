import React from "react";
import { Link } from "react-router";
import "./NavBar.css";

const NavBar = () => {
	return (
		<>
			<nav className='navbar'>
				<ul className='nav-links'>
					<li>
						<Link className='link' to='/'>
							About
						</Link>
					</li>

					<li>
						<Link className='link' to='/projects'>
							Projects
						</Link>
					</li>
					<li>
						<Link className='link' to='/resume'>
							Resume
						</Link>
					</li>
					<li>
						<Link className='link' to='/contact'>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
