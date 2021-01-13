import React from "react"
import '../styles/index.scss'
import HeaderStyles from './header.module.scss'

class Header extends React.Component {

  state = {
    menuVisible: false,
  };

  toggleMenuVisible = () => this.setState(state => ({
    menuVisible: !state.menuVisible,
  }));

render () {
  return (
    <header>
      <div className={HeaderStyles.header}>
        FIN - ANN
        <input type="checkbox" className={HeaderStyles.toggler} id="toggler" onClick={this.toggleMenuVisible}></input>
        <div className={HeaderStyles.hamburger}><div></div></div>
        <ul>
          <li><a href="#about">O firmie</a></li>
          <li><a href="#offer">Oferta</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
        <div style={{visibility: this.state.menuVisible ? "visible" : "hidden"}} className={HeaderStyles.pageMenu} id="pageMenu">
          <div>
            <ul>
              <li><a href="#about" onClick={this.toggleMenuVisible}>O firmie</a></li>
              <li><a href="#offer" onClick={this.toggleMenuVisible}>Oferta</a></li>
              <li><a href="#contact" onClick={this.toggleMenuVisible}>Kontakt</a></li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  )
}
}

export default Header

