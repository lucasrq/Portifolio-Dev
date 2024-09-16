import TitleStyle from './style'
export type Props ={
    size: 'small' | 'big';
    color:'primaria' | 'secundaria';
    children: string;
    lineHeight?: string;
    
}
const Title =({size = 'big', color = 'primaria', children,lineHeight}:Props) =><TitleStyle size={size} color={color} lineHeight={lineHeight}>{children}</TitleStyle>

export default Title