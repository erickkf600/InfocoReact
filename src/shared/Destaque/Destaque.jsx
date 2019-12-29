import React from "react";

function template() {
  return (
    <>
      <section className="bgDest">
        <div className="container">
          <h2 title="Veja os destaques que a infoco oferece">DESTAQUE</h2>
          <span className="linha-titulo"></span>
          <p>Confira também os nossos parceiros em destaque</p>
          <div className="row" id="cards">
            <div className="col-lg-3 col-md-6 col-6">
              <div className="card">
                <img className="img-fluid" src="https://infocomn.com.br/assets/img/parceiros/5.jpg" width="100%" alt="parceiro-imagem" title="infoco parceiro" />
                <div className="card-content">
                  <h3 className="card-title" title="infoco parceiro">PIZZA DO DUDU</h3>
                  <a href="parceiros" className="btn btn-block" title="visitar infoco parcerio">Visitar</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <div className="card">
                <img className="img-fluid" src="https://infocomn.com.br/assets/img/parceiros/5.jpg" width="100%" alt="parceiro-imagem" title="infoco parceiro" />
                <div className="card-content">
                  <h3 className="card-title" title="infoco parceiro">PIZZA DO DUDU</h3>
                  <a href="parceiros" className="btn btn-block" title="visitar infoco parcerio">Visitar</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <div className="card">
                <img className="img-fluid" src="https://infocomn.com.br/assets/img/parceiros/5.jpg" width="100%" alt="parceiro-imagem" title="infoco parceiro" />
                <div className="card-content">
                  <h3 className="card-title" title="infoco parceiro">PIZZA DO DUDU</h3>
                  <a href="parceiros" className="btn btn-block" title="visitar infoco parcerio">Visitar</a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <div className="card">
                <img className="img-fluid" src="https://infocomn.com.br/assets/img/parceiros/5.jpg" width="100%" alt="parceiro-imagem" title="infoco parceiro" />
                <div className="card-content">
                  <h3 className="card-title" title="infoco parceiro">PIZZA DO DUDU</h3>
                  <a href="parceiros" className="btn btn-block" title="visitar infoco parcerio">Visitar</a>
                </div>
              </div>
            </div>
          </div>
          <a href="parceiros" className="btn ver-mais mt-5" title="Ver mais parceiros da infoco">VER MAIS</a>
        </div>
      </section>    
    </>
  );
};

export default template;
