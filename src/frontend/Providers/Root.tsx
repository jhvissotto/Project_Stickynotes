import { PropsWithChildren } from 'react'

import { Global } from './Global'
import { _Styles } from './Styles'


export function Root({ children }: PropsWithChildren) {
    return (
        <Global>
            <_Styles>
                {children}
            </_Styles>
        </Global>
    )
}