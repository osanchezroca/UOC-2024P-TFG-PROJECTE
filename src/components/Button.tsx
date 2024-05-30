import Link from "next/link";

export default function Button(props: any) {
    const className = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className || ''}${props.isActive ? `bg-blue-700` : ''}`
    if (props.href) {
        return <Link {...props} className={className}>{props.children}</Link>
    } else {
        return <button {...props} className={className}>{props.children}</button>
    }
} 