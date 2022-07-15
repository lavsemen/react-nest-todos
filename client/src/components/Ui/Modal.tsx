import React, {ReactNode} from 'react';
import Button from "./Button";

type Props = {
    active: boolean
    title: string,
    confirmText: string,
    cancelText: string
    confirmHandler: () => void,
    children: ReactNode
    closeHandler: () => void
}

function Modal({active, title, cancelText, closeHandler, confirmText, confirmHandler, children}: Props) {
    if (!active) {
        return null
    }
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center"
            onClick={closeHandler}
        >
            <div
                className="bg-white rounded-xl w-96 p-3"
                onClick={(e) => e.stopPropagation()}>
                <div className="text-center text-2xl text-bold">
                    {title}
                </div>
                <div className="mt-2">
                    {children}
                </div>
                <div className="flex items-center mt-3">
                    <Button classNames="mr-2" action={confirmHandler}>{confirmText}</Button>
                    <Button type="red" action={closeHandler}>{cancelText}</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;