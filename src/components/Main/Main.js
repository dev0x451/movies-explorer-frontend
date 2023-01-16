import "./Main.css"
import Header from "../Header/Header"
import NavLoginRegister from "../NavLoginRegister/NavLoginRegister"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import Techs from "../Techs/Techs"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from "../Footer/Footer"

function Main() {
  return (
    <main className="main">
      <Header navigation={<NavLoginRegister />} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  )
}

export default Main
