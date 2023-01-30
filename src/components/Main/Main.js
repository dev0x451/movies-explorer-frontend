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
      <Header
        navigation={isLoggedIn ? <NavMoviesAccount /> : <NavLoginRegister />}
        bgcolor="#073042"
      />
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
