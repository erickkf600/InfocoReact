import React from "react";
function template() {
  let searchClass = ["search-area"];
  let headerFixed = ["infoco-navbar-light"];
  let hideMenu = ["navbar-nav m-auto"];
  let hideLogo = ["logo"];
  if (this.state.hideInput) {
    searchClass.push('exibir');
    hideMenu.push('hideMenu');
    hideLogo.push('hideLogo');
  }
  if (!this.state.headerTop) {
    headerFixed.push('headerFixed');
  }
  let item = this.state.selectedItem
  return (
    <header>
      {/* <div className="border-bottom header">
        <div className="container">
          <div className="text-center">
            <a className="logo" href="home" title="Pagina inicial infoco"><img src="https://infocomn.com.br/assets/img/logoDesktop.png" alt="InFoco logo" title="logo da infoco" /></a>
          </div>
        </div>
      </div> */}
      
      <nav className={headerFixed.join(' ')}>
        <button className="btn menu"><i className="fas fa-bars"></i></button>
        <div className="ml-5">
          <a className={hideLogo.join(' ')} href="home" title="Pagina inicial infoco"><img src="https://infocomn.com.br/intro.png" alt="InFoco logo" title="logo da infoco" /></a>
        </div>
        <div className="container">
          <ul className={hideMenu.join(' ')}>
            {
              this.state.menu.map(menu =>
                <li key={menu.name} ><a href={menu.url} title={menu.titulo} className={menu.url === item ? 'active' : null}>{menu.name}</a></li>
              )
            }
          </ul>
        </div>
        <button className="btn pesq-icon" onClick={(e) => this.showSearch(e)}></button>
        <div className={searchClass.join(' ')} >
          <form>
            <input id="pesquisar" name="pesq" type="text" placeholder="Digite o que procura..." />
          </form>
        </div>
      </nav>
    </header>
  );
};

export default template;
