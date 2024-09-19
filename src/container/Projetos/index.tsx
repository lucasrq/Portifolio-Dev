import CardProject from "../../components/CardProject";
import Title from "../../components/Titulo";
import { Container } from "./style";
import ifood from '../../../public/ifoodWeb.png'
import sport from '../../../public/EBACSPORT.png'
import Button from "../../components/Botton";
import Paragraph from "../../components/Paragrafos";
function Projetos(){
    return(
    <Container>
        <div className="Title">
            <Title color="primaria" size="big">Projetos</Title>
        </div>
        <div className="ProjectList">        
        <CardProject 
            imagem={ifood}
            nome="Projeto 1" 
            linkDeploy="https://efood-yel6.vercel.app" 
            linkGit="https://github.com/lucasrq/Efood" 
        />
        <Paragraph size={"ParagraphPrincipal"} color={"GreyTitle"}>Desenvolvi uma plataforma moderna e intuitiva para explorar e fazer pedidos de refeições de restaurantes favoritos, proporcionando uma experiência fluida e interativa. A aplicação utiliza APIs para garantir que os usuários tenham acesso a informações atualizadas sobre restaurantes e cardápios, permitindo uma navegação contínua. Com o uso de tecnologias como ReactJS, TypeScript, Redux Toolkit e React Router Dom, foi possível criar uma interface responsiva e eficiente no gerenciamento de estado, assegurando uma navegação suave. A estilização foi realizada com Styled Components, adotando uma abordagem modular e organizada, que facilita a manutenção e escalabilidade do projeto. Além disso, a validação dos formulários foi feita com Formik e Yup, garantindo segurança e simplicidade no processo de pedidos. A plataforma permite que os usuários explorem restaurantes, personalizem suas escolhas e finalizem seus pedidos diretamente, através de um carrinho de compras integrado, oferecendo uma experiência completa e prática. Esse projeto destaca minha capacidade de integrar tecnologias de ponta e entregar soluções escaláveis, focadas na experiência do usuário.</Paragraph>
        </div>
        <div className="ProjectListLeft">    
            <Paragraph size={"ParagraphPrincipal"} color={"GreyTitle"}>Desenvolvi, em colaboração com um professor da EBAC, um e-commerce de roupas utilizando React com TypeScript, Redux e Styled Components. Este projeto envolveu a criação de uma interface intuitiva e responsiva, permitindo que os usuários navegassem facilmente pelas coleções disponíveis. Com o uso do TypeScript, garanti uma tipagem rigorosa, o que melhorou a robustez e a manutenção do código. A gestão do estado foi realizada com Redux, proporcionando uma experiência de usuário fluida e eficiente ao lidar com o carrinho de compras e as interações na plataforma. A estilização dos componentes foi feita com Styled Components, permitindo uma abordagem modular e reutilizável, que facilitou a adaptação do design às necessidades do projeto. O resultado é uma aplicação escalável e funcional, que combina tecnologia moderna com uma experiência de compra agradável e prática.</Paragraph>    
        <CardProject 
            imagem={sport} 
            nome="Projeto 1" 
            linkDeploy="https://ebac-sports-5zyq.vercel.app" 
            linkGit="https://github.com/lucasrq/ebac_sports" 
        />
        </div>
        <div className="LinkGit">
            <Button link="https://github.com/lucasrq" >
                GitHub
            </Button>

        </div>
        
    </Container>
    )
}

export default Projetos