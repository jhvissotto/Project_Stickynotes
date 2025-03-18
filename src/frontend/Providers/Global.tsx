import { PropsWithChildren } from 'react'
import { StoreProvider } from 'easy-peasy'

import { store } from '@/src/frontend/global/store'



export function Global({ children }: PropsWithChildren) {
    return (
        <StoreProvider store={store} >
           {children}
        </StoreProvider>
    )
}