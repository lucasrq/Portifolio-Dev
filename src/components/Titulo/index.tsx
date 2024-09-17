import TitleStyle from './style'
export type Props ={
    size: 'small' | 'big';
    color:'primaria' | 'secundaria';
    children: string;

    
}
const Title =({size = 'big', color = 'primaria', children}:Props) =>
<TitleStyle size={size} color={color} >{children}</TitleStyle>

export default Title