type Props = {
    children: React.ReactNode
    className?: string
}
/**
 * Card component that wraps the children in a card-like container
 * @param props.children - The children of the card component 
 * @returns 
 */
export default function CardComponent(props: Props) {
    return <div className={`bg-slate-100 rounded-md p-3 border border-black border-solid flex flex-col jusitfy-stretch gap-2 max-w-full${props.className ? ` ${props.className}` : null}`}>
        {props.children}
    </div>
}