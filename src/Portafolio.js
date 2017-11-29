import React, { Component } from 'react';
import Utils from './Utils.js';
import './scss/main.css';
import compu from './img/compu.jpg';
import naranja from './img/naranja.jpg';
import postre from './img/postre.jpg';
import laberinto from './img/laberinto.jpg';
import pandita from './img/pandita.png';

import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  NavNavLink,
  Redirect
} from 'react-router-dom'


const HTML = () => {
  return (
    <div className=''>
      <div className="row contfull text-center">
        <div className="col-md-12 text-center">
          <div
            className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
            style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
            <div className="image-container center-block stile">

              <img className="img responsive" src={laberinto} />

              <div className="after d-flex text-center">
                <div>
                  {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                  <p className="center-block">
                    <a
                      href='https://shey-esther.github.io/Laberinto/'
                      target="_blank"
                    >
                      <button className="proyect">VER EL PROYECTO</button>
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div
            className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
            style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
            <div className="image-container center-block stile">
              <img
                className="img responsive"
                src={pandita} />
              <div className="after d-flex text-center">
                <div>
                  {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                  <p className="center-block">
                    <a
                      href='https://shey-esther.github.io/love-panda/'
                      target="_blank"
                    >
                      <button className="proyect">VER EL PROYECTO</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
            style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
            <div className="image-container center-block stile">
              <img
                className="img responsive"
                src={postre} />
              <div className="after d-flex text-center">
                <div>
                  {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                  <p className="center-block">
                    <a
                      href='https://shey-esther.github.io/Lya-movil-evaluado/'
                      target="_blank"
                    >
                      <button className="proyect">VER EL PROYECTO</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const CSS = () => {
  return (
    <div className="row contfull text-center">
      <div className="col-md-12 text-center">
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile">

            <img
              className="img responsive"
              src={naranja} />

            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block">
                  <a
                    href='https://shey-esther.github.io/Lya-movil-evaluado/'
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile">
            <img
              className="img responsive"
              src={compu} />
            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block stile">
                  <a
                    href='\nhttps://shey-esther.github.io/fotologo-localstorage/'
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile">
            <img
              className="img responsive"
              src={postre} />
            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block">
                  <a
                    href="\nhttps://shey-esther.github.io/youtuve/"
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const Jquery = () => {
  return (
    <div className="row contfull text-center">
      <div className="col-md-12 text-center">
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile">

            <img
              className="img responsive"
              src={compu} />

            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block">
                  <a
                    href='https://shey-esther.github.io/Deep-dive-evaluado/'
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile">
            <img
              className="img responsive"
              src={naranja} />
            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block">
                  <a
                    href="\nhttps://shey-esther.github.io/Buscaminas/"
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block">
            <img
              className="img responsive"
              src={postre} />
            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block stile">
                  <a
                    href='\n https://shey-esther.github.io/student-records/'
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const react = () => {
  return (
    <div className="row contfull text-center">
      <div className="col-md-12 text-center">
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block">
            <img
              className="img responsive"
              src={postre} />
            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block stile">
                  <a
                    href='\nhttps://shey-esther.github.io/react-routing/'
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile">

            <img
              className="img responsive"
              src={compu} />

            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block">
                  <a
                    href='https://shey-esther.github.io/resgistration-app-mvc-react/'
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
        <div
          className="col-xs-12 col-sm-6 col-md-4 proyects-container filter jquery wow flipInX"
          style={{ visibility: 'visible', animationName: 'flipInX', display: 'block' }}>
          <div className="image-container center-block stile">
            <img
              className="img responsive"
              src={naranja} />
            <div className="after d-flex text-center">
              <div>
                {/* <i className="icon-proyects icono-chain" />
                <h4 className="title-proyects">
                  RESPONSIVE BLOG</h4>
                <h5 className="subtitle-proyects">
                  HTML y CSS</h5>
                <p className="resume">
                  Landing page responsive sin uso de frameworks como bootstrap.</p> */}
                <p className="center-block">
                  <a
                    href="\nhttps://shey-esther.github.io/scoreboard-timer/"
                    target="_blank"
                  >
                    <button className="proyect">VER EL PROYECTO</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Portafolio = () => {
  return (
    <BrowserRouter>
      <section
        className="wow portafolio"
        style={{ visibility: 'visible', animationName: 'fadeInUp' }}>
        <div className="container">
          <div className="text-center title animated swing">Portafolio</div>
          <div className="row">
            <div className="col-md-offset-3 col-xs-12 col-md-6">
              <p className="parrafo text-center ">
                Trabajos realizados, separados por categorías de temas generales. También podrá ver el tipo de herramientas y frameworks utilizados.</p>
            </div>
          </div>
        </div>
        <div className="proyectos-portafolio container">
          <div className="row">
            <section>
              <div className="col-md-12 text-center">
                <NavLink to="/HTML"
                  className="btnp btn "
                  data-filter="all">html</NavLink>
                <NavLink to="/CSS"
                  className="btnp btn "
                  data-filter="Css">
                  Css</NavLink>
                <NavLink to="/Jquery"
                  className="btnp btn "
                  data-filter="Jquery">Jquery</NavLink>
                <NavLink to="/react"
                  className="btnp btn "
                  data-filter="react">
                  react</NavLink>
              </div>
            </section>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={HTML} />
          <Route path="/HTML" component={HTML} />
          <Route path="/CSS" component={CSS} />
          <Route path="/Jquery" component={Jquery} />
          <Route path="/react" component={react} />
        </Switch>
      </section>
    </BrowserRouter>
  )
}


export default Portafolio;







{/* <div className="after d-flex text-center">
<div>
  <i className="icon-proyects icono-chain" />
  <h4 className="title-proyects">
    RESPONSIVE BLOG</h4>
  <h5 className="subtitle-proyects">
    HTML y CSS</h5>
  <p className="resume">
    Landing page responsive sin uso de frameworks como bootstrap.</p>
  <p className="center-block">
    <a
      href="https://github.com/Sacunao/responsive-blog"
      target="_blank"
      className="btn-proyects">
      VER EL PROYECTO</a>
  </p>
</div>
</div> */}