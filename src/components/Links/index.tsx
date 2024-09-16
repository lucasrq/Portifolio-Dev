import LinksStyles from './style'
export type Props ={
    size: 'small' | 'big';
    color:'primaria' | 'secundaria';
    children: string;
    url : string
}
const Links =({size = 'big', color = 'primaria', children,url}:Props) =><LinksStyles size={size} color={color} url={url}>{children}</LinksStyles>

export default Links