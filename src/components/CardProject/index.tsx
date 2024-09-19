import Button from "../Botton";
import Paragraph from "../Paragrafos";
import CardProjectStyle, { CardProjectStyleR } from "./style";

export type Props = {
    imagem?: string;
    nome?: string;
    linkDeploy?: string; 
    linkGit?: string;    
}

export type PropsText = {
    textChildren: string;
}

const CardProject = ({ imagem, nome, linkDeploy, linkGit }: Props) => (
    <CardProjectStyle imagem={imagem} nome={nome}>
        <h1>{nome}</h1>
        <div className="Visit">
            <div className="Deploy">
                <Button link={linkDeploy} children="Deploy" />
            </div>
            <div className="Github">
                <Button link={linkGit} children="Github" />
            </div>
        </div>
    </CardProjectStyle>
);



export const CardProjectR = ({ textChildren }: PropsText) => (
    <CardProjectStyleR textChildren={textChildren}>
        <Paragraph color="GreyTitle" size="ParagraphPrincipal" children={textChildren} />
    </CardProjectStyleR>
);

export default CardProject;
