import Link from "next/link";

export default function Button(props: any) {
    let className = `bg-orange-500 text-white font-bold py-2 px-4 rounded-xl`
    if (props.size === 'sm') {
        className += ' py-1 px-2 text-sm'
    }
    if (props.className) {
        className += ` ${props.className}`
    }
    if (props.isActive) {
        className += ' bg-orange-700'
    }
    if (props.disabled) {
        className += ' opacity-50 cursor-not-allowed'
    }
    if (props.color) {
        switch (props.color) {
            case 'blue':
                className += ` bg-blue-500 ${!props.disabled ? 'hover:bg-blue-700' : ''}`
                break
            case 'red':
                className += ` bg-red-500 ${!props.disabled ? 'hover:bg-red-700' : ''}`
                break
            case 'green':
                className += ` bg-green-500 ${!props.disabled ? 'hover:bg-green-700' : ''}`
                break
            case 'slate':
                className += ` bg-slate-500 ${!props.disabled ? 'hover:bg-slate-700' : ''}`
                break
        }
    }

    if (!props.disabled && props.href) {
        return <Link href={props.href} className="flex justify-stretch">
            <button {...props} className={`grow ${className}`}>{props.children}</button>
        </Link>
    } else {
        return <button {...props} className={className}>{props.children}</button>
    }
} 