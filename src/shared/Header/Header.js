import React    from "react";
import template from "./HeaderComponent"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideInput: false,
      menu: [],
      selectedItem: String,
    };
  }
  componentDidMount = () =>{
    this.setState({ menu: [
      { name: 'home', title: 'Pagina inicial infoco', url: 'home'},
      { name: 'contato', title: 'Pagina contato infoco', url: 'contato'},
      { name: 'planos', title: 'Pagina planos infoco', url: 'planos' },
      { name: 'quem somos', title: 'Pagina quem somos infoco', url: 'quem-somos' },
      { name: 'parceiros', title: 'Pagina parceiros infoco', url: 'parceiros' },
      { name: 'faq', title: 'Pagina faq infoco', url: 'faq' },
    ]})
    this.checkParam()
  }
  checkParam = () =>{
    let rota = window.location.pathname
    switch (rota) {
      case "/":
        this.setState({selectedItem: 'home'})
        break;
      case "/home":
        this.setState({selectedItem: 'home'})
        break;
      case "/contato":
        this.setState({selectedItem: 'contato'})
        break;
      case "/planos":
        this.setState({selectedItem: 'planos'});
        break;
      case "/quem-somos":
        this.setState({ selectedItem: 'quem-somos'});
        break;
      case "/parceiros/1":
        this.setState({ selectedItem: 'parceiros'});
        break;
      case "/faq":
        this.setState({ selectedItem: 'faq'});
        break;

      default:
        break;
    }
  }
  showSearch = (e) => {
    if(e){
      this.setState({ hideInput: !this.state.hideInput })
    }
  }
  render() {
    return template.call(this);
  }
}

export default Header;
