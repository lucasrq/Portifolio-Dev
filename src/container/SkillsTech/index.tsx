import Card from "../../components/Card"
import Title from "../../components/Titulo"
import { Container, TitleContainer } from "./style"
import Python from '../../../public/python.png'
import JavaScript from '../../../public/JavaScript.png'
import HTML from '../../../public/HTML.png'
import typeScript from '../../../public/typeScript.png'
import ReactLogo from '../../../public/React.png'
import Cypress from '../../../public/Cypress.png'
import jest from '../../../public/Jest.png'
import Boostrap from '../../../public/Boostrap.png'
import CSS from '../../../public/CSS.png'
import Github from '../../../public/Github.png'
import Git from '../../../public/git.png'
import less from '../../../public/LESS.png'
import sass from '../../../public/SASS.png'



function SkillsTech() {
    return (
        <>
            <TitleContainer>
                <Title color="primaria" size="big">Tecnologias utilizadas</Title>
            </TitleContainer>
            <Container>
                <div className="Left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia culpa voluptates, ullam veritatis eius ex? Asperiores iusto odio dolorum delectus aperiam dolor inventore est dolore odit. Placeat aperiam adipisci optio.
                </div>
                <div className="Right">
                    <div className="slice">
                        <Card imagem={ReactLogo} nome="React" />
                        <Card imagem={JavaScript} nome="JavaScript" />
                        <Card imagem={Python}nome="Pyhoon" />
                        <Card imagem={typeScript} nome="TypeScript" />
                        <Card imagem={HTML} nome="HTML" />
                        <Card imagem={CSS} nome="CSS" />
                        <Card imagem={Cypress} nome="Cypress" />
                        <Card imagem={jest} nome="jest" />
                        <Card imagem={Boostrap} nome="Boostrap" />
                        <Card imagem={Git} nome="Git" />
                        <Card imagem={Github} nome="Github" />
                        <Card imagem={sass} nome="sass" />
                        <Card imagem={less} nome="less" />
                    </div>
                    <div className="slice">
                    <Card imagem={ReactLogo} nome="React" />
                        <Card imagem={JavaScript} nome="JavaScript" />
                        <Card imagem={Python}nome="Pyhoon" />
                        <Card imagem={typeScript} nome="TypeScript" />
                        <Card imagem={HTML} nome="HTML" />
                        <Card imagem={CSS} nome="CSS" />
                        <Card imagem={Cypress} nome="Cypress" />
                        <Card imagem={jest} nome="jest" />
                        <Card imagem={Boostrap} nome="Boostrap" />
                        <Card imagem={Git} nome="Git" />
                        <Card imagem={Github} nome="Github" />
                        <Card imagem={sass} nome="sass" />
                        <Card imagem={less} nome="less" />
                    </div>
                </div>

            </Container>
        </>

    )
}
export default SkillsTech