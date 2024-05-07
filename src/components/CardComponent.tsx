type Props = {
    children: React.ReactNode
}
/**
 * Card component that wraps the children in a card-like container
 * @param props.children - The children of the card component 
 * @returns 
 */
export default function CardComponent({ children }: Props) {
    return <div className='bg-slate-100 rounded-md p-3 border border-black border-solid flex flex-col jusitfy-stretch gap-2'>
        {children}
    </div>
}