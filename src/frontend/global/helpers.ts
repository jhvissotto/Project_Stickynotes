import { createTypedHooks } from 'easy-peasy'

import type { Store } from './store'


const typedHooks = createTypedHooks<Store>()

export const use = {
    Store:          typedHooks.useStore, 
    StoreState:     typedHooks.useStoreState, 
    StoreActions:   typedHooks.useStoreActions, 
    StoreDispatch:  typedHooks.useStoreDispatch, 
}