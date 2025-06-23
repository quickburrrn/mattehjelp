"use client"
import { ReactNode } from 'react';

type Props = {
    href?: string;
    className?: string;
    children: ReactNode;
    onClick?: () => void;
    Buttontype?: string;
    type?: 'button' | 'submit' | 'reset';
}

export const Button = ({href='', className = '', children, onClick, type} : Props) => {
    
    if (!href) {
        return (
            <button 
                type={type} 
                onClick={onClick}
                className={`${className} cursor-pointer px-12 py-3 font-rubik text-lg rounded-xl`}
            >
                {children}
            </button>
        );
    }

    return (
        <a href={href} className={`${className} cursor-pointer px-12 py-3 font-rubik text-lg rounded-xl`}>
            {children}
        </a>
    );
    
}