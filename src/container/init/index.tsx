import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Title from "../../components/Titulo"
import { Ancora, Container, Icon } from "./style"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
type Props= {
    id: string;
}

function Inicio({id}:Props){
    return(
        <Container id={id}>
                <Title   color="primaria" size="big">Boas vindas Visitante </Title>
                <Title color="primaria" size="small">Meu nome é Lucas </Title>
                <Title  color="primaria" size="big">Desenvolvedor Full Stack</Title>

                <div className="LinkStyle">
                    <Ancora href="https://github.com/lucasrq" target='_blank'><Icon icon={faGithub} /></Ancora>
                    <Ancora href="https://www.linkedin.com/in/lucasrrq/" target='_blank'><Icon icon={faLinkedin} /></Ancora>
                    <Ancora href="mailto:lucasroque545@gmail.co" target='_blank'><Icon icon={faEnvelope} /></Ancora>
                </div>
                
        </Container>
    )
}
export default Inicio