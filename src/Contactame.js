import React, { Component } from 'react';
import Utils from './Utils.js';
import './main.css';
import {
	NavLink,
} from 'react-router-dom'

const Contactame = () => {
	return (
		<div>
			<section className="contacto-content">
				<div className="text-center title-section">Contacto</div>
				<div className="container">
					<div className="row text-center">
						<div className="col-md-4 col-xs-12 contact-cols">
							<h4>
								<strong>CONTACTAME</strong>
							</h4>
							<p><span className="ion-email mr-1" />estheralvaro44@gmail.com</p>
							<p><span className="ion-android-call mr-1" />
								953 281406</p>
						</div>
						<div className="col-md-4 col-xs-12 contact-cols">
							<h4 className="raleway m-2">
								<strong>REDES SOCIALES</strong>
							</h4>
							<a target="_blank"
								href="https://twitter.com/Sheila_AO23">
								<i className="icon-twitter" />
							</a>
							<a target="_blank"
								href="https://github.com/Sacunao">
								<i className="icon-github" />
							</a>
							<a target="_blank"
								href="https://www.linkedin.com/in/sheila-acu%C3%B1a-obreg%C3%B3n-7415573b">
								<i className="icon-linkedin2" />
							</a>
							<a target="_blank"
								href="https://www.behance.net/sheilaaobre9c0">
								<i className="icon-behance" />
							</a>
							<a target="_blank"
								href="https://www.instagram.com/sheila_2390/">
								<i className="icon-instagram" />
							</a>
						</div>
						<div className="col-md-4 col-xs-12 contact-cols">
							<h4 className="raleway">
								<strong>DESCARGA MI CV</strong>
							</h4>
							<p className="p-descarga">
								Si tu quieres tener mas detalles acera de Mi, te invito a descargar mi CV.</p>
							<a className="cv"
								target="_blank"
								href="cv-sheila.pdf">
								<span />
								<span className="icon-download2">Descarga Mi CV</span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className="autor text-center">
				<p>Copyright © Esther Alvaro Cruz 2017</p>
			</div>
		</div>
	)
}

export default Contactame;