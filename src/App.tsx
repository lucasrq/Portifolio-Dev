import About from "./container/about"
import Footer from "./container/Footer"
import Header from "./container/header"
import Inicio from "./container/init"
import Projetos from "./container/Projetos"
import SkillsTech from "./container/SkillsTech"

function App() {
  return (
    <>
      <Header/>
      <Inicio id="Init"/>
      <About/>
      <SkillsTech/>
      <Projetos id="projetos"/>
      <Footer id="footer"/>
    </>
  )
}

export default App
