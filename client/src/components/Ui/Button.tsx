import React, {PropsWithChildren, ReactChildren, ReactNode} from 'react';


type Props = {
    type?: string,
    action?: () => void,
    children?: ReactNode,
    classNames?: string
}

function Button({type, action, children, classNames}: Props) {
    const classes: string[] = [classNames ?? '', 'p-2', 'text-white', 'rounded', 'flex', 'items-center', 'justify-center', 'transition', 'ease-in-out', 'delay-150']

    switch (type) {
        case 'red':
            classes.push('bg-red-500 hover:bg-red-400')
            break;
        case 'warning':
                classes.push('bg-amber-500 hover:bg-amber-400')
            break;
        default:
            classes.push('bg-blue-500 hover:bg-blue-400')
            break;
    }
    return (
        <button className={classes.join(' ')} onClick={action}>
            {children}
        </button>
    );
}

export default Button;