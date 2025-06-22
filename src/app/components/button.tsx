"use client"
import { ReactNode } from 'react';

type Props = {
    className?: string;
    children: ReactNode;
}

export const Button = ({className = '', children} : Props) => {
    return (
        <button className={`${className} bg-purple-600 cursor-pointer px-12 py-3 font-rubik text-lg rounded-xl hover:bg-purple-400 transition`}>
            {children}
        </button>
    );
}