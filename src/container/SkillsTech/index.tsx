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
import Paragraph from "../../components/Paragrafos"



function SkillsTech() {
    return (
        <>
            <TitleContainer>
                <Title color="primaria" size="big">Tecnologias utilizadas</Title>
            </TitleContainer>
            <Container>
                <div className="Left">
                    <Paragraph color="GreyTitle" size="ParagraphPrincipal">
                    Durante meus estudos e projetos pessoais, desenvolvi conhecimento em várias tecnologias essenciais para o desenvolvimento web. Estou familiarizada com React, uma poderosa biblioteca JavaScript para construção de interfaces interativas, além de TypeScript, que utilizo para criar funcionalidades dinâmicas e garantir maior segurança no código. Minha base em HTML e CSS me permite estruturar e estilizar layouts de forma eficiente e responsiva. Também uso Python, aplicando-o em automação e desenvolvimento de aplicações.
                    </Paragraph>
                    <Paragraph color="GreyTitle" size="ParagraphPrincipal">
                    Adicionalmente, tenho explorado ferramentas de testes como Cypress e Jest para garantir a qualidade do código. No front-end, utilizo pré-processadores como Sass e Less para uma organização de estilos mais eficiente, enquanto Bootstrap facilita a criação de layouts responsivos. Para controle de versão e colaboração em projetos, utilizo Git e GitHub, assegurando um desenvolvimento organizado e colaborativo.                    </Paragraph>
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