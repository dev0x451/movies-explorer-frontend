import "./Main.css"
import Header from "../Header/Header"
import NavLoginRegister from "../NavLoginRegister/NavLoginRegister"
import NavMoviesAccount from "../NavMoviesAccount/NavMoviesAccount"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer"

function Main({ isLoggedIn }) {
  return (
    <div className="main">
      <div className="main-header">
        <Header
          children={isLoggedIn ? <NavMoviesAccount /> : <NavLoginRegister />}
        />
      </div>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default Main
