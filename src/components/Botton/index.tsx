import { ButtonStyle } from './style';
import { ButtonHTMLAttributes } from 'react';

export type Props = {
    children: React.ReactNode; 
    link?: string; // Link para o botão
    linkGit?: string; // Link específico para o GitHub
} & ButtonHTMLAttributes<HTMLButtonElement>; 

const Button = ({ link, linkGit, children, ...props }: Props) => {
    const handleClick = (url?: string) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <ButtonStyle {...props} className='botao' 
        onClick={() => handleClick(link || linkGit)}>
            <button 
            >
                {children}
            </button>
        </ButtonStyle>
    );
};

export default Button;
