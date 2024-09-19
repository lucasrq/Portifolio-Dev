import Links from '../../components/Links'
import { Container, ContainerHeader } from './styled'
import Cat from '../../../public/gogoneee_Prancheta 1.png'
import Title from '../../components/Titulo'
import { useState } from 'react'
 
function Header(){

    const [DisplayImagem, setDisplayImagem] = useState(true)
    const hideImage  = () =>{
        setDisplayImagem(false)
    }

    const UpImage = () =>[
        setDisplayImagem(true)
    ]
    return(
    <>
    <Container>
        <ContainerHeader>
            <div className='HeaderProfile'>
            {DisplayImagem && (
                <>
                <img onClick={hideImage} src={Cat} alt="Cats" />
                <Title size='big' color='primaria'> Lucas Rodrigues</Title>
                </>
        )}
        {DisplayImagem || (
                <>
                <img onClick={UpImage} src={Cat} alt="Cats" />
                <Title size='big' color='primaria'> &lt;/Lucas Rodrigues&gt;</Title>
                </>
        )}
            </div>   

            <div className='Links'>
            <Links size='big' color="primaria" href='#Init'>Sobre</Links>
            <Links size='big' color="primaria" href='#projetos'>Projetos</Links>
            <Links size='big' color="primaria" href='#footer'>Contato</Links>
            </div>
        </ContainerHeader>
    </Container>
    </>
)   
}
export default Header