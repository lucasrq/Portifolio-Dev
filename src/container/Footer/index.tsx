import Container from "./style"
type Props= {
    id?: string; // A prop id é opcional
  }
function Footer({id}:Props){
    return(
        <Container id={id}>
        <div className="ContainerFooter">
            <div>
            <a href='mailto:lucasroque545@gmail.com' target="_blank">Email</a>
            <a href="https://github.com/lucasrq"  target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/lucasrrq/" target="_blank">Linkedin</a>
            </div>
            <p>&copy; 2024 Lucas. Todos os direitos reservados.</p>
        </div>
        </Container>
    )
}

export default Footer