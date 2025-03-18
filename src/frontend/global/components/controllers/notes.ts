import type { Action } from 'easy-peasy'
import { action } from 'easy-peasy'


export type Notes = {
    showOnlyFav: boolean
    setShowOnlyFav: Action<Notes, boolean>
}


export const notes: Notes = {
    // state
    showOnlyFav: false,

    // actions
    setShowOnlyFav: action((state, payload) => {
        state.showOnlyFav = payload
    }),
}