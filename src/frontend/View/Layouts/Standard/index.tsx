import type { PropsWithChildren } from 'react'
import { Fragment as MyApp } from 'react'


import { Header } from './Header'
import { Main } from './Main'
// import { Footer } from './Footer'



export function Standard({ children }: PropsWithChildren) {
    return (
        <MyApp>
            <Header className='width-max' />
            <Main className='safe-area-view' >
                {children}
            </Main>
            {/* <Footer /> */}
        </MyApp>
    )
}