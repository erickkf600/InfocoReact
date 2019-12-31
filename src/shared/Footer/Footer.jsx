import React from "react";
function template() {
  return (
    <>
      <section id="footer">
        <img src="https://infocomn.com.br/assets/img/logoDesktop.png" className="img-fluid" alt="Infoco Publicidades" title="Infoco Publicidades" width="12%" id="img-footer" />
        <div className="container">
          <div className="siteMap">
            <ul className="quick-links">
              <li><a href="home" title="Pagina inicial infoco">Home</a></li>
              <li><a href="contato" title="Pagina contato infoco">Contato</a></li>
              <li><a href="planos" title="Pagina planos infoco">Planos</a></li>
              <li><a href="sobre" title="Pagina quem somos infoco">Quem somos</a></li>
              <li><a href="parceiros" title="Pagina novidades infoco">Parceiros</a></li>
            </ul>
          </div>
          <div className="sociais">
            <a href="https://www.facebook.com/InFoco-Marketing-Multin%C3%ADvel-1184742348366469/?ref=settings" target="_blank"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UC7HtOoQ4BbvBaYUwBpI8dEg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="sub-footer">
          <div className="text-footer">
            <p>Copyright © <a href="https://infocomn.com.br/licenca.xml" target="_blank" rel="noopener noreferrer">Direitos autorais</a> 2019 | InFoco  Desenvolvido por
				    <a href="https://github.com/erickkf600" target="_blank" className="text-light" rel="noopener noreferrer"> Erick Ferreira</a></p>
          </div>
          <div className="imgsFooter">
            <img src="https://infocomn.com.br/assets/img/mpag-footer.png" alt=""/>
            <img src="https://infocomn.com.br/assets/img/selo.png" alt=""/>
			    </div>
		    </div>
      </section>
    </>
  );
};

export default template;
