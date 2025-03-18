import { TRPC } from '@/src/backend/TRPC'
import * as comps from './components'


export const router = TRPC.router({
    [comps.welcome.name]: comps.welcome.handler,
})