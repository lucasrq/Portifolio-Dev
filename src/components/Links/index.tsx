import LinksStyles from './style'
export type Props ={
    size: 'small' | 'big';
    color:'primaria' | 'secundaria';
    children: string;
    href : string
}
const Links =({size = 'big', color = 'primaria', children,href}:Props) =><LinksStyles size={size} color={color} href={href}>{children}</LinksStyles>

export default Links