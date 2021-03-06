import React from "react";
import Contador from './Contador'
function template() {
  return (
    <>
      <section id="sobre-infoco" title="Bem-Vindo a infoco">
        <div className="container">
          <div className="cabecalho">
            <h1 className="titulo" title="Bem-Vindo a infoco">Bem-Vindo a <span>InFoco</span></h1>
            <span className="linha-titulo"></span>
            <p>É um prazer recebê-lo no nosso site, fique à vontade para navegar nesta plataforma e conhecer o nosso trabalho, aqui você encontra todo tipo de conteúdo, com temas variados, além de inteirar-se sobre todas as novidades da Infoco e seus credenciados, estar aqui navegando já é um bom negócio pra você! Ingresse na nossa rede de networking, um mundo de oportunidades esperam por você!</p>
          </div>
        </div>
      </section>
      <section className="container col-xl-10" title="Beneficios da infoco">
        <ul className="itens-infoco">
          <div className="row">
            <li className="col-lg-3 col-md-6 col-sm-6">
              <i className="fas fa-bullhorn"></i>
              <h2 title="Ganhe mais destaque com a infoco">Ganhe mais destaque</h2>
              <p>Conosco sua empresa terá mais visibilidade, garantindo acesso por todos os lados, facilitando sua vida, mas também as de seus clientes.</p>
            </li>
            <li className="col-lg-3 col-md-6 col-sm-6">
              <i className="fas fa-globe"></i>
              <h2 title="Com a infoco você te a opação de obter seu proprio site">TENHA SEU PRÓPRIO SITE</h2>
              <p>A InFoco disponibiliza opções para nós Criarmos e Administrarmos seu site. Voce nunca mais vai precisar se preocupar com isso.</p>
            </li>
            <li className="col-lg-3 col-md-6 col-sm-6">
              <i className="fas fa-percent"></i>
              <h2 title="Com a infoco você tem descontos gatrantidos de nossos parceiros">DESCONTOS EXCLUSIVOS</h2>
              <p>Todos os nossos parceiros recebem o cartões fidelidade para ganhar e promover descontos aos seus clientes.</p>
            </li>
            <li className="col-lg-3 col-md-6 col-sm-6">
              <i className="fas fa-network-wired"></i>
              <h2 title="A infoco esta criando ium integração socioeconômica">NETWORKING</h2>
              <p>Criamos uma rede de negócios socioeconômicos em que reúne empresas para formar relacionamentos comerciais.</p>
            </li>
          </div>
        </ul>
      </section>
      <section className="container col-xl-10 video-setor" title="Um pouco sobre a InFoco">
        <div className="row">
          <div className="col-md-5 col-sm-12">
            <iframe className="video" width="100%" height="315" title="Infoco Publicidades" src="https://www.youtube.com/embed/1cj0C0q3M7M?rel=0&controls=0&loop=1&playlist=1cj0C0q3M7M" allow="accelerometer; autoplay; gyroscope"></iframe>
          </div>

          <div className="texto-video col-md-7 col-sm-12">
            <h2 title="Saiba um pouco mais sobre a infoco">Um pouco sobre a <span>InFoco</span></h2>
            <span className="linha-titulo"></span>
            <p>Somos uma empresa do segmento de publicidade, que chega ao mercado para oferecer o melhor em divulgação e veiculação da sua empresa promovendo um marketing digital eficaz, que gere resultados positivos e satisfatórios ao seu negócio.</p>
            <a href="https://infocomn.com.br/adesao" className="btn" title="Faça a sua adesão na infoco">FAÇA A SUA ADESÃO</a>
          </div>
        </div>
      </section>
      <Contador/>
    </>
  );
};

export default template;
