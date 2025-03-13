import Rct from 'react'
import { css } from 'styled-components'
import * as Rdx from '../../../model/store'
// import moment from 'moment'

// icons
import { FaTimesCircle, FaCalendarDay, FaCheckCircle } from 'react-icons/fa'
import { RiEditCircleFill } from 'react-icons/ri'
import { GiRoundStar } from 'react-icons/gi'
import { MdStars } from 'react-icons/md'

// ts
import { TextareaHTMLAttributes } from 'react'





// styles
const styles = {
    container: css`
        background-color: var(--primary-gradient-ini-light);
        width: 210px;
        height: 210px;
        border-radius: 10px;
    `,
    textarea: css`  
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
    `,
    listIcons: css`
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
    `,
    datetime: css`
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
    `,
}


// content
const content = {
    placeholder:    { en: 'Type your thoughts here',            },
    delete:         { en: 'Click here to delete this note',     }, 
    apply:          { en: 'Click here to apply the changes',    }, 
    edit:           { en: 'Click here to edit this note',       }, 
    favorite:       { en: 'Click here to favorite this note',   }, 
    disfavor:       { en: 'Click here to disfavor this note',   }, 
    datetime:       { en: 'Created at',                         },
}


// props
interface Props {
    data: {
        id:         string 
        text:       string 
        isFavorite: boolean
        datetime:   string
    }
}


// component
export default function StickyNote({ data }: Props) {
    // data
    const { id, text, isFavorite, datetime } = data

    
    // refs
    const ref = {
        // @ts-ignore
        textarea: Rct.useRef<TextareaHTMLAttributes>(),
    }

    // actions
    const { editNoteById, setFavoriteById, deleteNoteById } = Rdx.useStoreActions(str => str.components.containers.containerOfNotes)

    
    // controller
    const ctrl = (() => {
        // state
        const [stt, dsp] = Rct.useState({
            isEditing: false,
        })

        // getters
        const get = {
            isReadOnly: () => !stt.isEditing, 
        }

        // setters
        const set = {
            isEditing: pld => dsp(stt => ({ ...stt, isEditing: pld })),
        }

        // interface
        return { ...stt, ...get, get, set }
    })()


    
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
                ref.textarea.current.focus()
                const { value } = ref.textarea.current
                ref.textarea.current.value = ""
                ref.textarea.current.value = value
            }
            focusAtFinal()
        },
        apply() {
            editNoteById({ id, text: ref.textarea.current.value })
            ctrl.set.isEditing(false)
        },
    }

    // render
    return (
        // @ts-ignore
        <div css={styles.container}  className="relative" >

            {/* ========================== */}
            {/* ======== TEXTAREA ======== */}
            {/* ========================== */}
            <textarea
                ref={ref.textarea}
                // @ts-ignore 
                css={styles.textarea} 
                className="absolute"
                readOnly={ctrl.get.isReadOnly()}
                spellCheck={false}
                defaultValue={text}
                placeholder={content.placeholder.en}
            />

            {/* ======================= */}
            {/* ======== ICONS ======== */}
            {/* ======================= */}
            <div 
                // @ts-ignore
                css={styles.listIcons} 
                className="flex column ai-center absolute right-min" 
            >
                <FaTimesCircle      id="icon-delete"    className="i" title={content.delete.en}     onClick={handlers.delete} />
                
                {isFavorite 
                ? <GiRoundStar      id="icon-disfavor"  className="i" title={content.disfavor.en}   onClick={handlers.disfavor} />
                : <MdStars          id="icon-favorite"  className="i" title={content.favorite.en}   onClick={handlers.favorite} />}

                {ctrl.isEditing
                ? <FaCheckCircle    id="icon-apply"     className="i" title={content.apply.en}      onClick={handlers.apply}   />
                : <RiEditCircleFill id="icon-edit"      className="i" title={content.edit.en}       onClick={handlers.edit}   />}
            </div>


            {/* ========================== */}
            {/* ======== DATETIME ======== */}
            {/* ========================== */}
            <div 
                // @ts-ignore
                css={styles.datetime} 
                className="flex absolute bottom-min ai-center" 
                title={content.datetime.en} 
            >
                <FaCalendarDay id="icon" />
                <p id="text" >
                    {/* {moment().format('YYYY-MM-DD HH:MM')} */}
                    {datetime}
                </p>
            </div>

        </div>
    )
}