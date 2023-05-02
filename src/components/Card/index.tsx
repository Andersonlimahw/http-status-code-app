import { useState } from 'react';
import { ItemModel } from '../../model/Item';
import { Badge } from './Badge';
import { Description } from './Description';
import { Title } from './Title';
import { ModalDialog } from '../ModalDialog';

interface ICardProps {
    item: ItemModel;
    handleClick: any;
}

export const Card = ({
    item,
    handleClick
}: ICardProps) => {
    const {
        id,
        code,
        title,
        description,
        imageUrl,
        alt
    } = item;

    const codeColor: any = {
        '200': 'success',
        '': 'zinc-900'
    };



    return (
        <div
            className="flex max-w-xl flex-row items-start justify-start cursor-pointer"
            key={id}
            onClick={handleClick}
        >
            <div className="group inline flex-1">
                <img className="h-400 w-270 rounded-sm bg-gray-50 mb-2  hover:scale-110 transform-gpu" src={imageUrl} alt={alt} />
                <div className="p-4 flex justify-between">
                    <Title>
                        <Badge variant={codeColor[code]}>
                            {code}
                        </Badge>
                        &nbsp;
                        &nbsp;
                        {title}
                    </Title>
                </div>


                <div className='flex-1'>
                    <div className="relative mt-8 flex items-left gap-x-4 text-left">
                        <div className="text-sm leading-6">

                            {/* <Description>
                                {description}
                            </Description> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}