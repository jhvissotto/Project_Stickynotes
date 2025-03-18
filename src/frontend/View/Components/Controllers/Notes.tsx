import { HTMLProps } from 'react'
import cn from 'classnames'
import { styled } from 'styled-components'
import{ use } from '@/src/frontend/global/helpers'


const Styled_Div = styled.div`
    .buttons {
        border-radius: 4px;
        width: 130px;
        height: 30px;
    }
    .btOnlyFav {
        margin-left: 15px;
        background-color: var(--primary-light);
        &.toggle { background-color: var(--primary); }
    }
    .btDelAll {
        background: linear-gradient(var(--primary-gradient-ini),var(--primary-gradient-end));
        &:hover {
            background: linear-gradient(var(--primary-gradient-ini-light),var(--primary-gradient-end-light));
        }
    }
    .title {
        font-family: Montserrat;
        font-weight: 700;
        font-size: 13px;
    }
`


const t = {
    clickForToogle: { en: 'Click for toogle'            },
    clickForDelete: { en: 'Click for delete all notes'  },
    onlyFav:        { en: 'Only Favorites'              },
    delAll:         { en: 'Delete All Notes'            },
}



export function Notes({ style, className }: HTMLProps<HTMLElement>) {

    // selectors
    const { showOnlyFav } = use.StoreState(str => str.components.controllers.notes)

    // actions
    const { setShowOnlyFav } = use.StoreActions(str => str.components.controllers.notes)
    const { deleteAllNotes } = use.StoreActions(str => str.components.containers.notes)


    // handlers
    const handlers = {
        btDelAll() {
            deleteAllNotes()
        },
        btOnlyFav() {
            setShowOnlyFav(!showOnlyFav)
        },
    }


    return (
        <Styled_Div style={style} className={cn(className)} >
            
            <button 
                className='buttons btDelAll pointer-cascade'
                onClick={handlers.btDelAll} 
                title={t.clickForDelete.en}
            >
                <p className='title' >
                    {t.delAll.en}
                </p>
            </button>

            
            <button 
                className={cn('buttons btOnlyFav pointer-cascade', { 'toggle':showOnlyFav })}
                onClick={handlers.btOnlyFav} 
                title={t.clickForToogle.en}
            >
                <p className='title' >{t.onlyFav.en}</p>
            </button>

        </Styled_Div>
    )
}