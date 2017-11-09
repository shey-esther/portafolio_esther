import React, { Component } from 'react';
import Utils from './Utils.js';
import './main.css';
import {
	NavLink,
} from 'react-router-dom'

class Home extends Component {
	render() {
		return (
			<div className=" bodyme">
				<h1 className="title text-white lobster">
					<br />Esther Alvaro <br />Cruz</h1>
				<div className="subtitle raleway text-white">
					Front End Developer</div>
				<div className="links-hero">
					<span className="linkendin-hero">
						<a
							target="_blank"
							href="https://www.linkedin.com/in/esther-alvaro456/">LinkedIn</a>
					</span>
				</div>
			</div>
		)
	}
}
export default Home;