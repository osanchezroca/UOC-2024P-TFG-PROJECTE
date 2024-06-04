import Link from "next/link";

export default function Button(props: any) {
    let className = `bg-blue-500 text-white font-bold py-2 px-4 rounded`
    if (props.size === 'sm') {
        className += ' py-1 px-2 text-sm'
    }
    if (props.className) {
        className += ` ${props.className}`
    }
    if (props.isActive) {
        className += ' bg-blue-700'
    }
    if (props.disabled) {
        className += ' opacity-50 cursor-not-allowed'
    } else {
        className += ' hover:bg-blue-700'
    }

    if (!props.disabled && props.href) {
        return <Link href={props.href} className="flex justify-stretch">
            <button {...props} className={`grow ${className}`}>{props.children}</button>
        </Link>
    } else {
        return <button {...props} className={className}>{props.children}</button>
    }
} 