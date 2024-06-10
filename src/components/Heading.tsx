
export default function Heading(props: any) {
    return <h2 {...props} className={`text-lg font-bold-md text-gray-900 ${props.className || ''}`}>{props.children}</h2>
}