"use client"
import { ReactNode } from 'react';

type Props = {
    className?: string;
    children: ReactNode;
}

export const Checkbox = ({className, children} : Props) => {
    return (
        <label className={`${className} inline-flex items-center cursor-pointer gap-3`}>
            <input type="checkbox" className="sr-only peer" required/>
            
            <div className="w-8 h-8 shrink-0 rounded-lg border-border border-1 items-center flex justify-center peer-has-checked:bg-red-200 peer-checked:[&>span]:opacity-100">
                <span className='opacity-0 transition-opacity duration-200 text-input-text text-md select-none'>✕</span>
            </div>
            <span className="font-inter font-light text-md text-input-text">{children}</span>
        </label>
    );
}   