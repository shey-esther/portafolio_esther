import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/main.css';
import js from './img/js.png';
import sas from './img/sas.png';
import css3 from './img/css3.png';
import html from './img/html.png';
import git from './img/git.png';
import boot from './img/boot.png';
import react from './img/react.png';
import jq from './img/jq.jpg';
import {
  NavLink,
} from 'react-router-dom'

const Habilidades = () => {
  return (
    <section className=" econt ">
      <div className="container">
        <strong><h2 className="text-center titleh animated swing">Habilidades</h2></strong>
        <div className="row textt">
          <div className="col-md-offset-3 col-xs-12 col-md-6 ">
            <p className=" text-center">
              Estas son mis habilidades, mis poderes, lo que forma parte de mis conocimientos. Siempre estoy en constante evolución y aprendizaje, porque todo está en constante cambio y se tranforman en nuevos retos.
</p>
          </div>
        </div>
        <div className="row text-center textt">
          <div className="col-md-12 col-sm-6 col-md-3 escondite animated fadeInLeft" >
            <img className='pngs' src={html} />
            <p className="curso">HTML</p>
            <div className="ch-info-back me-escondo">
              <h3>HTML</h3>
              <p>Sirve para crear paginas web, darles estructura y contenido.</p>            
              </div>
          </div>
          <div className="col-md-12 col-sm-6 col-md-3 escondite  animated fadeInUp">
            <img className='pngs' src={css3} />
            <p className="curso">CSS3</p>
            <div className="ch-info-back me-escondo">
              <h3>CSS3</h3>
              <p>Define la estética de un sitio web, que haran la  pagina mucho mas agradable y llamativa.</p>
            </div>
          </div>
          <div className="col-md-12 col-sm-6 col-md-3 escondite  animated fadeInLeft">
            <img className='pngs' src={js} />
            <p className="curso">JAVASCRIPT</p>
            <div className="ch-info-back me-escondo">
              <h3>JAVASCRIPT</h3>
              <p>Da mayor dinamismo e interactividad a tu sitio web.</p>
            </div>
          </div>

          <div className="col-md-12 col-sm-6 col-md-3 escondite  animated fadeInUp">
            <img className='pngs' src={react} />
            <p className="curso">REACT</p>
            <div className="ch-info-back me-escondo">
              <h3>React</h3>
              <p>Es una librería Javascript focalizada en el desarrollo de interfaces de usuario.</p>
            </div>
          </div>
        </div>
        <div className="row text-center textt">
          <div className="col-md-12 col-sm-6 col-md-3 escondite animated fadeInLeft">
            <i className="devicon-bootstrap-plain jqicon"></i>
            <p className="curso">BOOTSTRAP</p>
            <div className="ch-info-back me-escondo">
              <h3>BOOTSTRAP</h3>
              <p>Framework CSS que te permitirá crear sitios web y aplicaciones web totalmente responsive.</p>            </div>
          </div>
          <div className="col-md-12 col-sm-6 col-md-3 escondite  animated fadeInUp ">
            <i className="devicon-sass-original jqicon"></i>
            <p className="curso">SASS</p>
            <div className="ch-info-back me-escondo">
              <h3>SASS</h3>
              <p>Sitios Web que se adaptan a los dispositivos, facilitando la lectura y navegación.</p>            </div>
          </div>
          <div className="col-md-12 col-sm-6 col-md-3 escondite animated fadeInLeft">
            <i className="devicon-jquery-plain jqicon"></i>
            <p className="curso">JQUERY</p>
            <div className="ch-info-back me-escondo">
              <h3>JQUERY</h3>
              <p>Es una librería de JavaScript que simplifica la tarea de programar en JavaScript y permite agregar interactividad a un sitio web.</p>
            </div>
          </div>
          <div className="col-md-12 col-sm-6 col-md-3 escondite animated fadeInUp ">
            <i class="devicon-github-plain jqicon"></i>
            <p className="curso">GITHUB</p>
            <div className="ch-info-back me-escondo">
              <h3>GITHUB</h3>
              <p>Plataforma de desarrollo colaborativo aloja proyectos utilizando el sistema de control de versiones Git.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;