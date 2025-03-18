// 'use client'

import type { PropsWithChildren } from 'react'

import { ThemeProvider }  from 'styled-components'
import { CacheProvider }  from '@emotion/react'
import createCache        from '@emotion/cache'

import { Styles, themes } from '@/src/frontend/design'


const cache = createCache({ key:'next' })


export function _Styles({ children }: PropsWithChildren) {
    return (
        <ThemeProvider theme={themes.styledComponents}>
            <CacheProvider value={cache}>
                <Styles.Global />
                <Styles.Custom />
                {children}
            </CacheProvider>
        </ThemeProvider>
    )
}