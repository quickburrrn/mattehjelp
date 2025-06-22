"use client"

type Props = {
    className?: string;
    placeholder: string;
}

export const Input = ({className = '', placeholder} : Props) => {
    return (
        <input placeholder={placeholder} className={`${className} text-left cursor-pointer px-4 py-4 placeholder:font-inter placeholder:font-light placeholder:text-md rounded-xl`} />
    );
}