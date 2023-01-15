import "./Main.css"
import Header from "../Header/Header"
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject"
import NavLoginRegister from "../NavLoginRegister/NavLoginRegister"

function Main() {
  return (
    <main className="main">
      <Header navigation={<NavLoginRegister />} />
      <Promo />
      <AboutProject />
      <Techs />
      {/* <AboutMe />
      <Portfolio />
      <Footer /> */}
    </main>
  )
}

export default Main
