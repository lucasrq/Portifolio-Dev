import ParagraphStyle from './style'

export type Props ={
    size: 'ParagraphPrincipal' | 'SubParagraph';
    color: 'WhiteTitle' | 'GreyTitle'
    children: string;
}
const Paragraph =({size = 'ParagraphPrincipal', color = 'WhiteTitle', children}: Props) =>
<ParagraphStyle size={size} color={color}>
    {children}
</ParagraphStyle>

export default Paragraph