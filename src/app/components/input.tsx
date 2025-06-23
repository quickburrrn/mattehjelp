"use client"

type Props = {
    className?: string;
    placeholder: string;
    type?: string;
}

export const Input = ({type = '',className = '', placeholder} : Props) => {
    return (
        <input type={type} placeholder={placeholder} className={`${className} text-left cursor-pointer px-4 py-4 placeholder:font-inter placeholder:font-light placeholder:text-md rounded-xl`} required/>
    );
}