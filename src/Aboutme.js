import React, { Component } from 'react';
import Utils from './Utils.js';
import './main.css';
import esther from './img/esther.jpg';
import {
	NavLink,
} from 'react-router-dom'

class Aboutme extends Component {
	render() {
		return (
			<div className='container about'>
				<div className='row'>
					<div
						className="col-xs-12 col-sm-6 col-md-6 text-center"
						style={{ perspective: 1000 }}>
						{/* <div
							className="image smoove"
							style={{ opacity: 1, transition: 'all 1s ease, opacity 1.5s ease' }} /> */}
						<img
							src={esther} style={{ opacity: 1, transition: 'all 1s ease, opacity 1.5s ease' }} />
					</div>

					<div
						className="col-xs-12 col-sm-6 col-md-6 text-center pd-l negro pad-top-q"
						style={{ perspective: 1000 }}>
						<h3 style={{ opacity: 1, transition: 'all 1s ease, opacity 1.5s ease' }}>
							ACERCA DE MI</h3>
						<p style={{ opacity: 1, transition: 'all 1s ease, opacity 1.5s ease' }}>
							'Hola soy Esther Alvaro Cruz desarrolladora Front-End, de la cuarta generación de Laboratoria-Arequipa, me considero una persona responsable y flexible, me gusta trabajar en equipo,en mis tiempos libres escucho música y sobretodo hacer deporte, mis deseos en el futuro es seguir especializándome y crecer en lo profesional y como persona .',</p>
						<div style={{ opacity: 1, transition: 'all 1s ease, opacity 1.5s ease' }}>
							<h4>MIS INTERESES</h4>
							<div className="row">
								<div className="col-md-offset-1 col-md-2">
									<div className="mythings text-center">
										<i className="icon-things icon-pencil2" />
										<p>Arte</p>
									</div>
								</div>
								<div className="col-md-2">
									<div className="mythings text-center">
										<i className="icon-things icon-airplane" />
										<p>Viajar</p>
									</div>
								</div>
								<div className="col-md-2">
									<div className="mythings text-center">
										<i className="icon-things icon-headphones" />
										<p>Musica</p>
									</div>
								</div>
								<div className="col-md-2">
									<div className="mythings text-center">
										<i className="icon-things icon-pacman" />
										<p>Deporte</p>
									</div>
								</div>
								{/* <div className="col-md-2">
									<div className="mythings text-center">
										<i className="icon-things icon-mug" />
										<p>Coffee Lover</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Aboutme;