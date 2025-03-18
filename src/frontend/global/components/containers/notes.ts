import type { Action } from 'easy-peasy'
import { action } from 'easy-peasy'

import shortid from 'shortid'
import moment from 'moment'



type ListOfNotes = {
    id: string
    text: string 
    isFavorite: boolean
    datetime: string    
}


export type Notes = {
    // state
    listOfNotes: ListOfNotes[]
    
    // actions
    newNote:            Action<Notes>
    setFavoriteById:    Action<Notes, { id: string, isFavorite: boolean }>
    editNoteById:       Action<Notes, { id: string, text: string }>
    deleteNoteById:     Action<Notes, { id: string }>
    deleteAllNotes:     Action<Notes>
}


export const notes: Notes = {
    // ======================= //
    // ======== state ======== //
    // ======================= //
    listOfNotes: Array(0).fill({
        id: shortid.generate(),
        text: '', 
        isFavorite: false,
        datetime: moment().format('YYYY-MM-DD hh:mm'),
    }),
    
    
    // ========================= //
    // ======== actions ======== //
    // ========================= //
    newNote: action((state) => {
        state.listOfNotes.unshift({
            id: shortid.generate(),
            text: '', 
            isFavorite: false,
            datetime: moment().format('YYYY-MM-DD hh:mm'),
        }) 
    }),

    setFavoriteById: action((state, payload) => {
        const { id, isFavorite } = payload
        const match = state.listOfNotes.find(i => i.id == id)
        if (match) match.isFavorite = isFavorite
    }),

    editNoteById: action((state, payload) => {
        const { id, text } = payload
        const match = state.listOfNotes.find(i => i.id == id)
        if (match) match.text = text
    }),

    deleteNoteById: action((state, payload) => {
        const { id } = payload
        state.listOfNotes = state.listOfNotes.filter(i => i.id != id)
    }),

    deleteAllNotes: action((state) => {
        state.listOfNotes = []
    }),
}