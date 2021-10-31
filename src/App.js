import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="index.html">Escolinha Vasco da Gama</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" href="clube.html">Clube <span className="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>


      <section id="sessao01">
        <h1 className="texto-principal">
          Bem vindos ao site oficial da escolinha de futebol do vasco da Gama

        </h1>
      </section>
      <section id="sessao02 d-flex justify-content-center">
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col lg-5 d-flex justify-content-center m-3">
              <div className="card bg-dark border-0 shadow-lg" style={{width: "18rem"}}>
                <img className="card-img-top rounded-circle mt-2" src="jogador.jpg" alt="a" />
                <div className ="card-body">
                <p className ="card-text text-white text-center font-weight-bold">Eurico Miranda, maior odiador
                do Flamídia.</p>
                </div>
              </div>
            </div>
            <div className="col lg-5 d-flex justify-content-center m-3">
              <div className="card bg-dark border-0 shadow-lg" style={{width: "18rem"}}>
                <img className="card-img-top rounded-circle mt-2" src="presidente.jpg" alt="a" />
                <div className ="card-body">
                <p className ="card-text text-white text-center font-weight-bold">Eurico Miranda, ex presidente do vasco da gama.</p>
                </div>
              </div>
            </div>
            <div className="col lg-5 d-flex justify-content-center m-3">
              <div className="card bg-dark border-0 shadow-lg" style={{width: "18rem"}}>
                <img className="card-img-top rounded-circle mt-2" src="treinador.jpg" alt="a" />
                <div className ="card-body">
                <p className ="card-text text-white text-center font-weight-bold">Eurico Miranda, maior odiador
                do Flamídia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sessao03">
        <div className="container d-flex justify-content-center align-content-center" style={{padding: "25px"}}>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="text-white nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                aria-controls="pills-home" aria-selected="true">História</a>
            </li>
            <li className="nav-item">
              <a className="text-white nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                aria-controls="pills-profile" aria-selected="false">Hino</a>
            </li>
            <li className="nav-item">
              <a className="text-white nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                aria-controls="pills-contact" aria-selected="false">Escudo</a>
            </li>
          </ul>
        </div>
        <div className="container d-flex justify-content-center text-white font-weight-bold">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              Club de Regatas Vasco da Gama ComC • MHM • EmMJK (mais conhecido apenas por Vasco e cujo acrônimo é
              CRVG) é uma entidade sócio-poliesportiva brasileira com sede na cidade do Rio de Janeiro, fundada em
              21 de agosto de 1898 por um grupo de remadores. Inspirados nas celebrações do quarto centenário da
              descoberta do caminho marítimo para as Índias, ocorrida em 1498, batizaram a nova agremiação com o
              nome do herói português que alcançou tal feito, o navegador Vasco da Gama.
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RS4ZzYjFZcE?controls=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              sdsadsadsadsa
            </div>
          </div>
        </div>
      </section>

      <footer className="rodape">
        <p>Henrique Pitágoras</p>
      </footer>
    </>
  );
}

export default App;
