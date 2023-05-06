import { ItemModel } from '../../model/Item';
import { Badge } from './Badge';
import { Title } from './Title';
import { Transition } from '@headlessui/react';

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
        imageUrl,
        alt,
        family
    } = item;

    const codeColor: any = {
        '2xx': 'success',
        '4xx': 'warning',
        '5xx': 'error',
        '': 'zinc-900'
    };



    return (
        <Transition
            enter="transition-opacity ease-linear duration-500"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transition-opacity ease-linear duration-600"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
        >
            <div className="flex max-w-xl flex-row items-start justify-start cursor-pointer shadow-lg hover:shadow-sm hover:scale-110 transform-gpu"
                key={id}
                onClick={handleClick}
            >
                <div className="group inline flex-1">
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-700"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity ease-linear duration-800"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <img className="h-400 w-[100%] rounded-sm bg-gray-50 mb-2" src={imageUrl} alt={alt} />
                    </Transition.Child>

                    <Transition.Child
                        enter="transition-opacity ease-linear duration-700"
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave="transition-opacity ease-linear duration-800"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <div className="p-4 flex justify-between">
                            <Title>
                                <Badge variant={codeColor[family]}>
                                    {code}
                                </Badge>
                                &nbsp;
                                &nbsp;
                                {title}
                            </Title>
                        </div>
                    </Transition.Child>
                </div>
            </div>
        </Transition>

    )
}