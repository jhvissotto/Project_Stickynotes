import { action } from 'easy-peasy'
import moment from 'moment'
import shortid from 'shortid'
// ts
import { Action } from 'easy-peasy'
// import { Store } from '../../store'


interface IistOfNotes {
    id: string
    text: string 
    isFavorite: boolean
    datetime: string    
}

export interface ContainerOfNotes {
    // state
    listOfNotes: IistOfNotes[]
    
    // actions
    newNote:            Action<ContainerOfNotes>
    setFavoriteById:    Action<ContainerOfNotes, { id: string, isFavorite: boolean }>
    editNoteById:       Action<ContainerOfNotes, { id: string, text: string }>
    deleteNoteById:     Action<ContainerOfNotes, { id: string }>
    deleteAllNotes:     Action<ContainerOfNotes>
}


const containerOfNotes: ContainerOfNotes = {
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
    newNote: action((stt, pld) => {
        stt.listOfNotes.unshift({
            id: shortid.generate(),
            text: '', 
            isFavorite: false,
            datetime: moment().format('YYYY-MM-DD hh:mm'),
        }) 
    }),

    setFavoriteById: action((stt, pld) => {
        const { id, isFavorite } = pld
        const match = stt.listOfNotes.find(i => i.id == id)
        if (match) match.isFavorite = isFavorite
    }),

    editNoteById: action((stt, pld) => {
        const { id, text } = pld
        const match = stt.listOfNotes.find(i => i.id == id)
        if (match) match.text = text
    }),

    deleteNoteById: action((stt, pld) => {
        const { id } = pld
        stt.listOfNotes = stt.listOfNotes.filter(i => i.id != id)
    }),

    deleteAllNotes: action((stt, pld) => {
        stt.listOfNotes = []
    }),
}


export default containerOfNotes