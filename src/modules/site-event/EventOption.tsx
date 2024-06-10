
type EventOptionProps = {
    id: string;
    icon: string;
    name: string;
    onClick: () => void;
    isActive: boolean;
};

export default function EventOption({ id, icon, name, isActive = false, onClick = () => { } }: EventOptionProps) {
    let itemClass = `cursor-pointer flex flex-col items-center rounded-lg shadow py-3 px-2 select-none`
    if (isActive) {
        itemClass += ' bg-orange-500 border-orange-500 text-white'
    } else {
        itemClass += ' bg-white text-gray-900'
    }

    return (
        <div key={id} className={`${itemClass}`}
            onClick={onClick}>
            <p className='text-2xl'>{icon}</p>
            <p className='text-sm'>{name}</p>
        </div>
    );
};
