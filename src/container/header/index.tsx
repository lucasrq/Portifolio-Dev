import Links from '../../components/Links'
import { Container, ContainerHeader } from './styled'
import Cat from '../../../public/Cat.png'
import Title from '../../components/Titulo'
 
function Header(){
    return(
    <>
    <Container>
        <ContainerHeader>
        
            <div className='HeaderProfile'>
            <img src={Cat} alt="Cats" />
            <Title size='big' color='primaria'>Lucas Rodrigues</Title>
            </div>   

            <div>
            <Links size='big' color="primaria" href='#'>Sobre</Links>
            <Links size='big' color="primaria" href='#'>Projetos</Links>
            <Links size='big' color="primaria" href='#'>Contato</Links>
            </div>
        </ContainerHeader>
    </Container>
    </>
)   
}
export default Header