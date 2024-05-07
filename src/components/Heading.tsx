import { ReactNode } from "react"

export default function Heading(props: any) {
    return <h2 {...props} className={`text-xl font-bold-md uppercase font-mono ${props.className || ''}`}>{props.children}</h2>
}