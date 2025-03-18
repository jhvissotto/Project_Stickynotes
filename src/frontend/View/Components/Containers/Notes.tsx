import { HTMLProps } from 'react'
import { styled } from 'styled-components'

import { use } from '@/src/frontend/global/helpers'
import { NewNote, StickyNote } from '@/src/frontend/View/Components/Cards'


const Styled_UL = styled.ul`
    &.container {
        background-color: rgb(240,240,240);
        min-width: 300px;
        min-height: 720px;
        border-radius: 10px;
    }
    .li {
        margin-top: 20px;
        margin-left: 23px;

    }
`


export function Notes({ style }: HTMLProps<HTMLElement>) {

    // selectos
    const { showOnlyFav } = use.StoreState(str => str.components.controllers.notes)
    const { listOfNotes } = use.StoreState(str => str.components.containers.notes)

    // actions
    const { newNote } = use.StoreActions(str => str.components.containers.notes)

    // handlers
    const handlers = {
        newNote() {
            newNote()
        },
    }

    return (
        <Styled_UL style={style} className='container width-max flex flex-wrap ac-start' >
            
            {/* ========================== */}
            {/* ======== NEW NOTE ======== */}
            {/* ========================== */}
            <li className='li'>
                <NewNote onClick={handlers.newNote} />
            </li>

            {/* =============================== */}
            {/* ======== LIST OF NOTES ======== */}
            {/* =============================== */}
            {listOfNotes.map((data) => {
                const { id, text, isFavorite, datetime } = data
                
                const render = (
                    <li key={id} className='li'  >
                        <StickyNote data={{ id, text, isFavorite, datetime }} />
                    </li>
                )

                if (showOnlyFav)
                return isFavorite ? render : null

                else 
                return render
            })}

        </Styled_UL>
    )
}