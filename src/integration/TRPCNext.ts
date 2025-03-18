import { createTRPCNext } from '@trpc/next'
import { ssrPrepass } from '@trpc/next/ssrPrepass'
import { httpBatchLink } from '@trpc/client'
import transformer from 'superjson'

import { router } from './router'



function getBaseUrl() {
  // ======== Browser ======== //
  if (typeof window !== 'undefined') {
    return ''
  }

  // ======== Server ======== //
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // ======== Localhost ======== //
  return `http://localhost:${process.env.PORT ?? 3000}`
}



// ============================================= //
// ================ SSR EXAMPLE ================ //
// ============================================= //
export const TRPCNext = createTRPCNext<typeof router>({
  config({ ctx }) {
    return (typeof window !== 'undefined') 
    ? { links: [httpBatchLink({ url:'/api/trpc', transformer })]} 
    : { links: [httpBatchLink({ 
        url: getBaseUrl() + '/api/trpc',
        headers: () => (!ctx?.req?.headers) ? {} : { cookie: ctx.req.headers.cookie }, 
        transformer, 
      })],
    }
  },
  ssr: true,
  ssrPrepass,
  transformer,
})



// ================================================= //
// ================ DEFAULT EXAMPLE ================ //
// ================================================= //
// export const TRPCNext = createTRPCNext<typeof router>({
//   config() {
//     const url = getBaseUrl() + '/api/trpc'
//     return {
//       links: [splitLink({
//         condition: (op) => op.type === 'subscription',
//         true: unstable_httpSubscriptionLink({ url, transformer }),
//         false: httpBatchLink({ url, transformer }),
//       })],
//     }
//   },
//   ssr: true,
//   ssrPrepass,
//   transformer,
// })
