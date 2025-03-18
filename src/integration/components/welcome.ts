import { z } from 'zod'
import { TRPC } from '@/src/backend'


export const name = 'welcome'
export const req = z.object({})
export type Req = z.infer<typeof req>


export const handler = TRPC.procedure.input(req).query(async ({}) => {
    return { message:'Welcome' }
})