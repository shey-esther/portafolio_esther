import React, { Component } from 'react';
import Utils from './Utils.js';
import './scss/main.css';
import {
	NavLink,
} from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className="bodyme">
				<div className='bodyme__opac'>
				<h1 className="bodyme__title text-white animated slideInRight">
					<br />Esther Alvaro Cruz</h1>
				<div className="bodyme__subtitle  text-white animated infinite zoomIn">
					Front End Developer
					</div>
				{/* <span className="bodyme__link">
					<a
						target="blank"
						href="https://www.linkedin.com/in/esther-alvaro456/">LinkedIn</a>
				</span> */}
				</div>
			</div>
		)
	}
}
export default Home;