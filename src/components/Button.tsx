import Link from "next/link";

export default function Button(props: any) {
    const className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    if (props.href) {
        return <Link className={className} {...props}>{props.children}</Link>
    } else {
        return <button className={className} {...props}>{props.children}</button>
    }
} 