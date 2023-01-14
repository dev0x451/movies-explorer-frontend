import "./Main.css"
import Promo from "../Promo/Promo"
import Header from "../Header/Header"
import NavLoginRegister from "../NavLoginRegister/NavLoginRegister"

function Main() {
  return (
    <div className="main">
      <Header navigation={<NavLoginRegister />} />
      <Promo />
      {/*
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />*/}
    </div>
  )
}

export default Main
