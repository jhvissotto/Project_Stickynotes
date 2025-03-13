// import Rct from 'react'
import cn from 'classnames'
import { css } from 'styled-components'
import * as Rdx from '../../../model/store'


const styles = {
    buttons: css`
        border-radius: 4px;
        width: 130px;
        height: 30px;
    `,
    btOnlyFav: ({ showOnlyFav }) => css`
        background-color: var(${showOnlyFav ? '--primary' : '--primary-light'});
        margin-left: 15px;
    `,
    btDelAll: css`
        background: linear-gradient(var(--primary-gradient-ini),var(--primary-gradient-end));
        &:hover {
            background: linear-gradient(var(--primary-gradient-ini-light),var(--primary-gradient-end-light));
        }
    `,
    title: css`
        font-family: Montserrat;
        font-weight: 700;
        font-size: 13px;
    `,
}


const content = {
    clickForToogle: { en: 'Click for toogle'            },
    clickForDelete: { en: 'Click for delete all notes'  },
    onlyFav:        { en: 'Only Favorites'              },
    delAll:         { en: 'Delete All Notes'            },
}




export default function ControllerOfNotes({ style, className }) {

    // selectors
    const { showOnlyFav } = Rdx.useStoreState(str => str.components.controllers.controllerOfNotes)

    // actions
    const { setShowOnlyFav } = Rdx.useStoreActions(str => str.components.controllers.controllerOfNotes)
    const { deleteAllNotes } = Rdx.useStoreActions(str => str.components.containers.containerOfNotes)


    // handlers
    const handlers = {
        btDelAll() {
            deleteAllNotes()
        },
        btOnlyFav() {
            setShowOnlyFav(!showOnlyFav)
        },
    }

    // render
    return (
        <div style={style} className={cn(className)} >
            
            <button 
                // @ts-ignore
                css={[styles.buttons, styles.btDelAll]} 
                className="pointer-cascade"
                onClick={handlers.btDelAll} 
                title={content.clickForDelete.en}
            >
                {/* @ts-ignore */}
                <p css={styles.title} >
                    {content.delAll.en}
                </p>
            </button>

            
            <button 
                // @ts-ignore
                css={[styles.buttons, styles.btOnlyFav({ showOnlyFav })]} 
                className="pointer-cascade"
                onClick={handlers.btOnlyFav} 
                title={content.clickForToogle.en}
            >
                {/* @ts-ignore */}
                <p css={styles.title} >
                    {content.onlyFav.en}
                </p>
            </button>

        </div>
    )
}