import { css } from 'styled-components'
import * as Rdx from '../../../model/store'
import NewNote from '../../../view/components/cards/new-note'
import StickyNote from '../../../view/components/cards/sticky-note'



const styles = {
    container: css`
        background-color: rgb(240,240,240);
        min-width: 300px;
        min-height: 720px;
        border-radius: 10px;
    `,
    li: css`
        margin-top: 20px;
        margin-left: 23px;
    `,
}



export default function ContainerOfNotes({ style }) {

    // selectos
    const { showOnlyFav } = Rdx.useStoreState(str => str.components.controllers.controllerOfNotes)
    const { listOfNotes } = Rdx.useStoreState(str => str.components.containers.containerOfNotes)


    // actions
    const { newNote } = Rdx.useStoreActions(str => str.components.containers.containerOfNotes)
    

    // handlers
    const handlers = {
        newNote() {
            newNote()
        },
    }

    // render
    return (
        // @ts-ignore
        <ul style={style} css={styles.container} className="width-max flex flex-wrap ac-start" >
            
            {/* ========================== */}
            {/* ======== NEW NOTE ======== */}
            {/* ========================== */}
            {/* @ts-ignore */}
            <li css={styles.li} >
                <NewNote onClick={handlers.newNote} />
            </li>

            {/* =============================== */}
            {/* ======== LIST OF NOTES ======== */}
            {/* =============================== */}
            {listOfNotes.map((data, key) => {
                const { id, text, isFavorite, datetime } = data
                
                const render = (
                    // @ts-ignore
                    <li key={id} css={styles.li}  >
                        <StickyNote data={{ id, text, isFavorite, datetime }} />
                    </li>
                )

                if (showOnlyFav)
                return isFavorite ? render : null

                else 
                return render
            })}

        </ul>
    )
}