import { ItemModel } from '../../model/Item';
import { Badge } from './Badge';
import { Title } from './Title';
import { Transition } from '@headlessui/react';

interface ICardProps {
    item: ItemModel;
    animationDurationEnter: number;
    animationDurationLeave: number;
    handleClick: any;
}

export const Card = ({
    item,
    animationDurationEnter,
    animationDurationLeave,
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
        '3xx': 'warning',
        '4xx': 'warning',
        '5xx': 'danger',
        '': 'zinc-900'
    };


    return (
        <Transition
            enter={`transition-opacity ease-linear duration-${animationDurationEnter}`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave={`transition-opacity ease-linear duration-${animationDurationLeave}`}
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
        >
            <div className="flex max-w-xl flex-row items-start justify-start cursor-pointer shadow-lg hover:shadow-sm hover:scale-110 transform-gpu"
                key={id}
                onClick={handleClick}
            >
                <div className="group inline flex-1">
                    <Transition.Child
                        enter={`transition-opacity ease-linear duration-${animationDurationEnter + 100}`}
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave={`transition-opacity ease-linear duration-${animationDurationLeave + 200}`}
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-0"
                    >
                        <img className="max-h-[300px] min-h-[300px]  h-[300px] w-[100%] grayscale hover:grayscale-0 rounded-sm bg-gray-50 mb-2" src={imageUrl} alt={alt} onError={(e : any) => e.target.src = 'assets/images/code/default.jpg' } loading="lazy" />
                    </Transition.Child>

                    <Transition.Child
                        enter={`transition-opacity ease-linear duration-${animationDurationEnter + 200}`}
                        enterFrom="opacity-0 scale-0"
                        enterTo="opacity-100 scale-100"
                        leave={`transition-opacity ease-linear duration-${animationDurationLeave + 300}`}
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