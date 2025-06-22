"use client"
import { ReactNode } from 'react';

type Props = {
    className?: string;
    children: ReactNode;
}

export const Button = ({className = '', children} : Props) => {
    return (
        <button className={`${className} cursor-pointer px-12 py-3 font-rubik text-lg rounded-xl`}>
            {children}
        </button>
    );
}