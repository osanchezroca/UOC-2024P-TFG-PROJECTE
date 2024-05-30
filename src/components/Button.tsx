import Link from "next/link";

export default function Button(props: any) {
    let className = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className || ''}${props.isActive ? `bg-blue-700` : ''}`
    if (props.size === 'sm') {
        className += ' py-1 px-2 text-sm'
    }
    if (props.href) {
        return <Link {...props} className={className}>{props.children}</Link>
    } else {
        return <button {...props} className={className}>{props.children}</button>
    }
} 