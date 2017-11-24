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
      <strong><h2 className="text-center titleh">Habilidades</h2></strong>
        <div className="row textt">
          <div className="col-md-offset-3 col-xs-12 col-md-6">
            <p className=" text-center">
              Estas son mis habilidades, mis poderes, lo que forma parte de mis conocimientos. Siempre estoy en constante evolución y aprendizaje, porque todo está en constante cambio y se tranforman en nuevos retos.
</p>
          </div>
        </div>
        <div className="row text-center textt">
          <div className="col-md-12 col-sm-6 col-md-3 " >
            <img className='pngs' src={html} />  
            <p className="curso">HTML</p>
          </div>
          <div
            className="col-md-12 col-sm-6 col-md-3">
            <img className='pngs' src={css3} />
            <p className="curso">CSS</p>
          </div>
          <div
            className="col-md-12 col-sm-6 col-md-3 ">
            <img className='pngs' src={js} />
            <p className="curso">JAVASCRIPT</p>
          </div>
          <div
            className="col-md-12 col-sm-6 col-md-3">
            <img className='pngs' src={git} /> 
            <p className="curso">GITHUB</p>
          </div>

        </div>
        <div className="row text-center textt">

          <div
            className="col-md-12 col-sm-6 col-md-3">
            <img className='pngs' src={boot} />
            <p className="curso">BOOTSTRAP</p>
          </div>
          <div
            className="col-md-12 col-sm-6 col-md-3">
            <img className='pngs' src={sas}  />
            <p className="curso">SASS</p>
          </div>
          <div
            className="col-md-12 col-sm-6 col-md-3">
            <img className='pngs' src={jq}  />
            <p className="curso">JQUERY</p>
          </div>
          <div
            className="col-md-12 col-sm-6 col-md-3">
            <img className='pngs' src={react}  />
            <p className="curso">React</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Habilidades;