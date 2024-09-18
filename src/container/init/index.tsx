import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Title from "../../components/Titulo"
import { Container, Icon } from "./style"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Inicio(){
    return(
        <Container>
                <Title  color="primaria" size="big">Boas vindos Visitante </Title>
                <Title color="primaria" size="small">Meu nome é Lucas </Title>
                <Title  color="primaria" size="big">Desenvolvedor Full Stack</Title>

                <div className="LinkStyle">
                    <Icon icon={faGithub} />
                    <Icon icon={faLinkedin} />
                    <Icon icon={faEnvelope} />
                </div>
                
        </Container>
    )
}
export default Inicio