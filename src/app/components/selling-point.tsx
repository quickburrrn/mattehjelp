import { ReactNode } from 'react';

type Props = {
    icon: ReactNode;
    title: string;
    children: ReactNode;
    className?: string;
}

export const SellingPoint = ({icon, title, children, className=''}: Props) => {
    return (
        <div className={`${className} border-border border-1 rounded-2xl text-left py-4 pb-10 my-8 px-4`}>
            {icon}     
            <h1 className='text-xl font-rubik font-medium py-2'>{title}</h1>
            <p className='pt-1 text-md font-inter font-light text-text'>{children}</p>
        </div>
    );
}