import * as trpcNext from '@trpc/server/adapters/next'

import { router } from '@/src/integration/router'


export default trpcNext.createNextApiHandler({
    router,
    // createContext: ctx => ctx,
    // createContext: ({ req, res }) => ({ req, res }), 
})