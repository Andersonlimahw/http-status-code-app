import { FC } from 'react';
interface IBadgeProps {
    variant?: 'success' | 'warning' | 'danger' | 'info'; 
    children: any;
}
export const Badge: FC<IBadgeProps> = ({ variant = 'info', children, ...rest } : IBadgeProps) => {
    const backgroundVariant = {
        'success': 'bg-green-600 text-zinc-900 hover:bg-green-800 hover:text-white', 
        'warning': 'bg-yellow-600 text-zinc-900 hover:bg-yellow-800 hover:text-white', 
        'danger': 'bg-red-500 text-zinc-900 hover:bg-red-800 hover:text-white', 
        'info': 'bg-blue-600 text-zinc-900 hover:bg-blue-800 hover:text-white', 
    };
    return (        
        <small className={`${backgroundVariant[variant]} relative z-10 rounded-full px-3 py-1.5 font-semibold mx-4 m-4`} {...rest}>
            {children}
        </small>
    )
}