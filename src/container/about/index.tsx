import Paragraph from "../../components/Paragrafos"
import Title from "../../components/Titulo"

import { Container, ContainerHeader } from "./style"

function About(){
    return(
        <>
        <Container>
            <ContainerHeader>
            <div className="Left">
            <Title color="primaria" size="big">
                    Sobre Mim
                </Title>
            <Paragraph color="GreyTitle" size="ParagraphPrincipal">
            Sou Lucas Rodrigues, desenvolvedor com formação em Desenvolvimento Full Stack pela EBAC. Utilizo React e TypeScript para construir aplicações web funcionais e interativas. Minha experiência inclui criação e migração de landing pages, além da automação de processos para melhorar a eficiência e a escalabilidade dos projetos.
            </Paragraph>
            <Paragraph color="GreyTitle" size="ParagraphPrincipal">
            Estou envolvido em diversas etapas do desenvolvimento, desde a integração de APIs até a validação de formulários e a implementação de interfaces responsivas. Utilizo ferramentas como Styled Components, Redux Toolkit e testes automatizados para garantir a integridade e a manutenção contínua do código. Estou acostumado a trabalhar com metodologias ágeis, o que me permite colaborar eficazmente em equipes e adaptar-me rapidamente às necessidades dos projetos.
            </Paragraph>    
            </div>
            </ContainerHeader>  
        </Container>
        
    
        </>
        
        
    )
}
export default About