import {ButtonStyle} from './style'
export type Props = {
    children: string;
}
const Button =({children }:Props)=>
 <ButtonStyle>
    {children}
</ButtonStyle>

export default Button