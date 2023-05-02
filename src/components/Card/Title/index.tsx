import { FC } from 'react';


export const Title: FC<any> = ({ children }) => {
    return (
        <h3 className="text-xl text-white-900 font-medium p-4">
            {children}
        </h3>
    )
}