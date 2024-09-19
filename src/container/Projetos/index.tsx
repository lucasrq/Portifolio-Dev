import CardProject from "../../components/CardProject";
import Title from "../../components/Titulo";
import { Container } from "./style";
import ifood from '../../../public/ifoodWeb.png'
import sport from '../../../public/EBACSPORT.png'
import Button from "../../components/Botton";
import Paragraph from "../../components/Paragrafos";
type Props={
    id: string;
}
function Projetos({id}:Props){
    return(
    <Container id={id}>
        <div className="Title">
            <Title color="primaria" size="big">Projetos</Title>
        </div>
        <div className="ProjectList">        
        <CardProject 
            imagem={ifood}
            nome="" 
            linkDeploy="https://efood-yel6.vercel.app" 
            linkGit="https://github.com/lucasrq/Efood" 
        />
        <Paragraph size={"ParagraphPrincipal"} color={"GreyTitle"}>Desenvolvi uma plataforma moderna e intuitiva para explorar e fazer pedidos em restaurantes favoritos, proporcionando uma experiência interativa e fluida. A aplicação utiliza APIs para garantir informações atualizadas de restaurantes e cardápios, permitindo uma navegação contínua. Com ReactJS, TypeScript, Redux Toolkit e React Router Dom, criei uma interface responsiva e eficiente no gerenciamento de estado. A estilização, feita com Styled Components, segue uma abordagem modular e escalável. Formulários foram validados com Formik e Yup, assegurando simplicidade e segurança. A plataforma permite explorar restaurantes, personalizar escolhas e finalizar pedidos com um carrinho de compras integrado, focando na experiência do usuário.</Paragraph>
        </div>
        <div className="ProjectListLeft">    
            <Paragraph size={"ParagraphPrincipal"} color={"GreyTitle"}>Desenvolvi, em colaboração com um professor da EBAC, um e-commerce de roupas utilizando React com TypeScript, Redux e Styled Components. O projeto focou em criar uma interface intuitiva e responsiva, facilitando a navegação pelas coleções. O uso de TypeScript garantiu uma tipagem rigorosa, aprimorando a robustez e manutenção do código. Com Redux, a gestão de estado proporcionou uma experiência fluida, especialmente no carrinho de compras e nas interações. A estilização modular com Styled Components permitiu uma fácil adaptação do design. O resultado é uma aplicação escalável e funcional, que oferece uma experiência de compra prática e agradável.</Paragraph>    
        <CardProject 
            imagem={sport} 
            nome="" 
            linkDeploy="https://ebac-sports-5zyq.vercel.app" 
            linkGit="https://github.com/lucasrq/ebac_sports" 
        />
        </div>
        <div className="LinkGit">
            <Button link="https://github.com/lucasrq" >
              Meu Github
            </Button>

        </div>
        
    </Container>
    )
}

export default Projetos