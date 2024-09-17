import CardSkills from "./style";

export type Props={
    imagem: string;
    nome: string
}

const Card = ({imagem, nome}: Props)=>
<CardSkills imagem={imagem} nome={nome}>
        <img src={imagem} alt={nome} />
        <h1>{nome}</h1>
</CardSkills>

export default Card