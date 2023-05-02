import  { FC } from 'react';
export const Description : FC<any>  = ({ children }) => {
    return(
        <p className='text-sm text-zinc-400 font-normal'>
            {children}
        </p>
    )
}