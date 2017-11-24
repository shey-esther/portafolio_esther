import React, { Component } from 'react';
import Utils from './Utils.js';
import './scss/main.css';
import lampara from './img/suelto.png';

import {
	NavLink,
} from 'react-router-dom'

const Contactame = () => {
	return (
		<div>
			<section className="contacto-content">
			{/* <img className='imgpng' src={lampara} /> */}
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
								href="https://shey-esther@github.com">
								<i class="fa fa-twitter" aria-hidden="true"></i>
							</a>
							<a target="_blank"
								href="https://shey-esther@github.com">
								<i class="fa fa-github" aria-hidden="true"></i>
							</a>
							<a target="_blank"
								href="https://www.linkedin.com/in/esther-alvaro456">
								<i class="fa fa-linkedin" aria-hidden="true"></i>
							</a>
							<a target="_blank"
								href="https://www.linkedin.com/in/esther-alvaro456">
								<i class="fa fa-behance" aria-hidden="true"></i>
							</a>
							<a target="_blank"
								href="https://www.linkedin.com/in/esther-alvaro456">
								<i class="fa fa-instagram" aria-hidden="true"></i>
							</a>
						</div>
						<div className="col-md-4 col-xs-12 contact-cols">
							<h4 className="raleway">
								<strong>DESCARGA MI CV</strong>
							</h4>
							<p className="p-descarga">
								Si tu quieres tener mas detalles acera de Mi, te invito a descargar mi CV.</p>
							<a className="CVdownload"
								
								href="./pdf/esther.pdf" download="EstherCV">
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