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
				<div className="bodyme__subtitle  text-white animated  zoomIn">
					Front End Developer
					</div>
				</div>
			</div>
		)
	}
}
export default Home;