import { HTMLProps } from 'react'
import cn from 'classnames'
import { styled } from 'styled-components'


const Styled_Header = styled.header`
    &.container {
        height: 70px !important;
        background: linear-gradient(var(--primary-gradient-ini), var(--primary-gradient-end)); 
    }
    .title {
        font-family: 'Russo One';
        font-weight: 100;
        font-size: 26px;
    }
`


export function Header({ className, ...props }: HTMLProps<HTMLElement>) {
    return (
        <Styled_Header className={cn('container flex jc-center ai-center', className)} {...props} >
            <h1 className='title'>STICKY NOTE</h1>
        </Styled_Header>
    )
}