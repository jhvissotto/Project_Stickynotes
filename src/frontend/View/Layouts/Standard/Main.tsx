import { HTMLProps } from 'react'
import cn from 'classnames'


export function Main({ children, className, ...props }: HTMLProps<HTMLElement>) {
    return (
        <main className={cn('flex', className)} {...props} >
            {children}
        </main>
    )
}