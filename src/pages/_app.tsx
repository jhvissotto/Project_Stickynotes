import type { AppProps } from 'next/app'

import { TRPCNext } from '@/src/integration/TRPCNext'
import { Providers } from '@/src/frontend'



function App({ Component, pageProps }: AppProps) {
    return (
        <Providers.Root>
            <Component {...pageProps} />
        </Providers.Root>
    ) 
}

export default TRPCNext.withTRPC(App)
// export default App