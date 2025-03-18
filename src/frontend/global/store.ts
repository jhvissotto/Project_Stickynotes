import { createStore, persist } from 'easy-peasy'

import { type Components, components } from './components'


export type Store = {
    components: Components 
}


export const store = createStore<Store>(persist({
    components,
}, {
    storage: 'localStorage', 
}))