import { initTRPC } from '@trpc/server'
import transformer from 'superjson'


export const TRPC = initTRPC.create({
    transformer,
})