import { ReactNode, useState } from "react";
import Button from "./Button";

type RenderButtonProps = {
    open: () => void
}
type ModalProps = {
    children: ReactNode;
    renderButton?: (props: RenderButtonProps) => ReactNode;
}
export default function Modal({ children, renderButton }: ModalProps) {
    const [opened, setOpened] = useState(false)

    return <>
        {renderButton && renderButton({ open: () => setOpened(!opened) })}
        {opened && <div className="fixed h-svh w-svw inset-0 bg-black bg-opacity-50 p-5 justify-center items-center overflow-auto" style={{ zIndex: 1000 }}>
            <div className="bg-white p-4 rounded-lg flex flex-col justify-center items-start">
                <Button size='sm' onClick={() => setOpened(false)}>&times;</Button>
                {children}
            </div>
        </div>}
    </>
}