import Preloader from "../Preloader/Preloader"
import Hero from "../Hero/Hero"
import "./App.css"

console.log((false && true) || false || (true && false))

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Preloader />
    </div>
  )
}

export default App
