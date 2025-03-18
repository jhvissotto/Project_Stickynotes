import type { TextareaHTMLAttributes } from 'react'

import { useRef, useState } from 'react'
import { styled } from 'styled-components'
import { use } from '@/src/frontend/global/helpers'

// icons
import { FaTimesCircle, FaCalendarDay, FaCheckCircle } from 'react-icons/fa'
import { RiEditCircleFill } from 'react-icons/ri'
import { GiRoundStar } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'



const Styled_Div = styled.div`
    &.container {
        background-color: var(--primary-gradient-ini-light);
        width: 210px;
        height: 210px;
        border-radius: 10px;
    }
    .textarea {
        resize: none;
        border: none;
        background-color: transparent;
        font-family: Montserrat;
        font-weight: 600;
        font-size: 13px;
        margin-top: 10px;
        margin-left: 10px;
        width: 170px;
        height: 170px;
    }
    .listIcons {
        margin-top: 4px;
        margin-right: 5px;

        .i {
            cursor: pointer;
            color: rgb(64,64,64);
            margin-top: 5px;
            &:hover {
                color: rgb(8,8,8);
            }
        }
        #icon-favorite  { font-size: 20px; }
        #icon-disfavor  { font-size: 20px; }
        #icon-delete    { font-size: 18px; }
        #icon-edit      { font-size: 20px; }
        #icon-apply     { font-size: 18px; }
    }
    .datetime {
        margin-left: 11px;
        margin-bottom: 8px;
        #icon {
            font-size: 12px;
            color: rgb(32,32,32);
        }
        #text {
            font-family: Montserrat;
            font-weight: 600;
            font-size: 13px;
            margin-left: 4px;
            color: rgb(16,16,16);
        }
    }
`


const t = {
    placeholder:    { en: 'Type your thoughts here',            },
    delete:         { en: 'Click here to delete this note',     }, 
    apply:          { en: 'Click here to apply the changes',    }, 
    edit:           { en: 'Click here to edit this note',       }, 
    favorite:       { en: 'Click here to favorite this note',   }, 
    disfavor:       { en: 'Click here to disfavor this note',   }, 
    datetime:       { en: 'Created at',                         },
}


type Props = {
    data: {
        id:         string 
        text:       string 
        isFavorite: boolean
        datetime:   string
    }
}



function useController({ isEditing=false }) {
    
    const [state, setState] = useState({ isEditing })

    const get = {
        isReadOnly: () => !state.isEditing, 
    }

    const set = {
        isEditing: (isEditing:boolean) => setState(state => ({ ...state, isEditing })),
    }

    return { ...state, ...get, get, set }
}


export function StickyNote({ data }: Props) {
    // data
    const { id, text, isFavorite, datetime } = data

    // refs
    // @ts-expect-error boring
    const ref_textarea = useRef<TextareaHTMLAttributes>(null)

    // actions
    const { editNoteById, setFavoriteById, deleteNoteById } = use.StoreActions(str => str.components.containers.notes)

    
    // controller
    const ctrl = useController({})

    
    // handlers
    const handlers = {
        favorite() {
            setFavoriteById({ id, isFavorite: true })
        },
        disfavor() {
            setFavoriteById({ id, isFavorite: false })
        },
        delete() {
            deleteNoteById({ id })
        },
        edit() {
            ctrl.set.isEditing(true)
            function focusAtFinal() {
                ref_textarea.current.focus()
                const { value } = ref_textarea.current
                ref_textarea.current.value = ''
                ref_textarea.current.value = value
            }
            focusAtFinal()
        },
        apply() {
            editNoteById({ id, text: ref_textarea.current.value })
            ctrl.set.isEditing(false)
        },
    }


    return (
        <Styled_Div className='container relative' >

            {/* ========================== */}
            {/* ======== TEXTAREA ======== */}
            {/* ========================== */}
            <textarea
                ref={ref_textarea}
                className='textarea absolute'
                readOnly={ctrl.get.isReadOnly()}
                spellCheck={false}
                defaultValue={text}
                placeholder={t.placeholder.en}
            />

            {/* ======================= */}
            {/* ======== ICONS ======== */}
            {/* ======================= */}
            <div className='listIcons flex column ai-center absolute right-min'>
                <FaTimesCircle      id='icon-delete'    className='i' title={t.delete.en}     onClick={handlers.delete} />
                
                {isFavorite 
                ? <GiRoundStar      id='icon-disfavor'  className='i' title={t.disfavor.en}   onClick={handlers.disfavor} />
                : <MdStars          id='icon-favorite'  className='i' title={t.favorite.en}   onClick={handlers.favorite} />}

                {ctrl.isEditing
                ? <FaCheckCircle    id='icon-apply'     className='i' title={t.apply.en}      onClick={handlers.apply}   />
                : <RiEditCircleFill id='icon-edit'      className='i' title={t.edit.en}       onClick={handlers.edit}   />}
            </div>


            {/* ========================== */}
            {/* ======== DATETIME ======== */}
            {/* ========================== */}
            <div 
                className='datetime flex absolute bottom-min ai-center' 
                title={t.datetime.en} 
            >
                <FaCalendarDay id='icon' />
                <p id='text' >
                    {/* {moment().format('YYYY-MM-DD HH:MM')} */}
                    {datetime}
                </p>
            </div>

        </Styled_Div>
    )
}