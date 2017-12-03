import React, { Component } from 'react';
import Utils from './Utils.js';
import './scss/main.css';
import esther from './img/esther.JPG';
import {
	NavLink,
} from 'react-router-dom'

class Aboutme extends Component {
	render() {
		return (
			<div className='container about'>
				<div className='row'>
					<div
						className="col-xs-12 col-sm-6 col-md-6 text-center dgrimg">
					<img
							src={esther} style={{ opacity: 1, transition: 'all 1s ease, opacity 1.5s ease' }} />
					</div>

					<div
						className="col-xs-12 col-sm-6 col-md-6 text-center pd-l negro pad-top-q"
						style={{ perspective: 1000 }}>
						<strong> <h3 className='text animated swing'>
							Acerca de Mi</h3></strong>
						<p className=" ">
							'Hola soy Esther Alvaro Cruz desarrolladora Front-End, de la cuarta generación de Laboratoria-Arequipa me considero una persona responsable y flexible, me gusta trabajar en equipo, en mis tiempos libres escucho música y sobretodo hacer deporte, mis deseos en el futuro es seguir especializándome y crecer en lo profesional y como persona .</p>
						<div >
							<div className="row">
							<h4 className='interes'>Mis Intereses</h4>
								<div className="col-md-offset-1 col-md-2 animated fadeInRight ">
									<div className="mythings text-center">
										<i className="fa fa-pencil" aria-hidden="true"></i>
										<p>Arte</p>
									</div>
								</div>
								<div className="col-md-2 animated fadeInUp">
									<div className="mythings text-center">
										<i className="fa fa-car" aria-hidden="true"></i>
										<p>Viajar</p>
									</div>
								</div>
								<div className="col-md-2 animated fadeInRight">
									<div className="mythings text-center">
										<i className="fa fa-headphones" aria-hidden="true"></i>
										<p>Musica</p>
									</div>
								</div>
								<div className="col-md-2 animated fadeInUp">
									<div className="mythings text-center">
										<i className="fa fa-futbol-o" aria-hidden="true"></i>
										<p>Deporte</p>
									</div>
								</div>
								<div className="col-md-2 animated fadeInRight">
									<div className="mythings text-center">
										<i className="fa fa-cutlery" aria-hidden="true"></i>
										<p>Cocina</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Aboutme;