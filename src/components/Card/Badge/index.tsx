import { FC } from 'react';
interface IBadgeProps {
    variant?: 'success' | 'warning' | 'danger' | 'info'; 
    children: any;
}
export const Badge: FC<IBadgeProps> = ({ variant = 'info', children  } : IBadgeProps) => {
    const backgroundVariant = {
        'success': 'bg-green-600 text-white-600 hover:bg-green-800', 
        'warning': 'bg-gray-500 text-gray-600 hover:bg-gray-800', 
        'danger': 'bg-gray-500 text-gray-600 hover:bg-gray-800', 
        'info': 'bg-gray-5000 text-gray-600 hover:bg-gray-800', 
    };
    return (        
        <small className={`${backgroundVariant[variant]} relative z-10 rounded-full px-3 py-1.5 font-thin mx-4 m-4`}>
            {children}
        </small>
    )
}