import React, { Component } from 'react';
import Home from './Home.js'
import Aboutme from './Aboutme.js'
import Habilidades from './Habilidades.js';
import Portafolio from './Portafolio.js';
import Contactame from './Contactame.js';
import './scss/main.css';
import estherlogo from './img/logo.png';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';

const App = () => {
	return (<BrowserRouter>
		<div>
			<header>
				<div className="hero" id="bg-imagenheader">
					<div className="overlay">
						<div className="hero-content d-flex">
							<nav
								className="navbar navbar-default navbar-fixed-top navhome"
								style={{ backgroundColor: 'rgba(#0f0f10de)' }}>
								<div >
									<div className="navbar-header">
										<button
											type="button"
											className="navbar-toggle collapsed"
											data-toggle="collapse"
											data-target="#bs-example-navbar-collapse-1"
											aria-expanded="false">
											<span className="sr-only">Toggle navigation</span>
											<span className="icon-bar" />
											<span className="icon-bar" />
											<span className="icon-bar" />
										</button>
										<NavLink to={'/Home'}><img className="img responsive imglogo" src={estherlogo} /></NavLink>
									</div>
									<div
										className="navbar-collapse collapse"
										id="bs-example-navbar-collapse-1"
										aria-expanded="false"
										style={{ height: 1 }}>
										<ul style={{ Color: 'white' }} className="nav navbar-nav navbar-right">
											<li>
												<NavLink to={'/Home'} style={{ Color: 'white' }} className="list raleway text-white"
												>HOME</NavLink>
											</li>
											<li>
												<NavLink to={'/Aboutme'} style={{ Color: 'white' }} className="list raleway text-white"
												>ACERCA DE MÍ</NavLink>
											</li>
											<li>
												<NavLink to={'/habilidades'} style={{ Color: 'white' }} className="list raleway text-white"
												>HABILIDADES</NavLink>
											</li>
											<li>
												<NavLink to={'/portafolio'} className="list raleway text-white"
												>PORTAFOLIO</NavLink>
											</li>
											<li>
												<NavLink to={'/Contactame'} className="list raleway text-white"
												>CONTÁCTAME</NavLink>
											</li>
										</ul>
									</div>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/home" render={() => <Home />} />
				<Route exact path="/aboutme" render={() => <Aboutme />} />
				<Route exact path="/habilidades" render={() => <Habilidades />} />
				<Route exact path="/portafolio" render={() => <Portafolio />} />
				<Route exact path="/contactame" render={() => <Contactame />} />
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;





{/* <div className="show-grid">
<nav className='y-web-nav '>

	<nav className="navbar navbar-default navhome">
		<div className="container-fluid">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<NavLink to="/"><p>Esther</p></NavLink>
			</div>
			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav">
					<li className="active">
						<NavLink className="navli" to="/Home"><p>HOME</p></NavLink>
					</li>
					<li>
						<NavLink className="navli" to="/Aboutme"><p>ACERCA DE MÍ</p></NavLink></li>
					<li>
						<NavLink className="navli" to="/Habilidades"><p>HABILIDADES</p></NavLink></li>
					<li>
						<NavLink className="navli" to="/portafolio"><p>PORTAFOLIO</p></NavLink>
					</li>
					<li>
						<NavLink className="navli" to="/Contactame"><p>CONTÁCTAME</p></NavLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</nav>
</div> */}



