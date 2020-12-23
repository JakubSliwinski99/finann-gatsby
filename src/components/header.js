import React from "react"
import '../styles/index.scss'
import HeaderStyles from './header.module.scss'



// const menuCheck = <input type="checkbox" className={HeaderStyles.toggler} id="toggler"></input>;

// const checkWork = () => {
//   alert("asda")
// }

const Header = () => {
  return (
    <header>
      <div className={HeaderStyles.header}>
        FINN - ANN
        <input type="checkbox" className={HeaderStyles.toggler} id="toggler"></input>
        <div className={HeaderStyles.hamburger}><div></div></div>
        <ul>
          <li><a href="#about">O firmie</a></li>
          <li><a href="#offer">Oferta</a></li>
          <li><a href="#contact">Kontakt</a></li>
        </ul>
        <div className={HeaderStyles.pageMenu} id="pageMenu">
          <div>
            <ul>
              <li><a href="#about">O firmie</a></li>
              <li><a href="#offer">Oferta</a></li>
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header

