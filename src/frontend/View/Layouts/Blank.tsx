import type { PropsWithChildren } from 'react'
import { Fragment as MyApp } from 'react'
import { styled } from 'styled-components'


const S = {
    Main: styled.main`
        height: 100%;
    `
}


export function Blank({ children }: PropsWithChildren) {
    return (
        <MyApp>
            {/* <header></header> */}
            <S.Main>{children}</S.Main>
            {/* <footer></footer> */}
        </MyApp>
    )
}