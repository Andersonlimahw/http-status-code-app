import { ItemModel } from '../../model/Item';
import { Badge } from './Badge';
import { Title } from './Title';

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
        alt
    } = item;

    const codeColor: any = {
        '200': 'success',
        '': 'zinc-900'
    };



    return (
        <div className="flex max-w-xl flex-row items-start justify-start cursor-pointer shadow-lg hover:shadow-sm hover:scale-110 transform-gpu"
            key={id}
            onClick={handleClick}
        >
            <div className="group inline flex-1">
                <img className="h-400 w-270 rounded-sm bg-gray-50 mb-2" src={imageUrl} alt={alt} />
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
            </div>
        </div>
    )
}