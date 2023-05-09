import { FC } from 'react';


export const Title: FC<any> = ({ children }) => {
    return (
        <h3 className="text-sm text-white-900 font-medium p-3">
            {children}
        </h3>
    )
}