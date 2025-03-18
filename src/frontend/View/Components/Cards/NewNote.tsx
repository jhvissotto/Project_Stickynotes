import { styled } from 'styled-components'
import { MdAddCircle } from 'react-icons/md'


const Styled_Div = styled.div`
    &.container {
        background-color: var(--primary-light);
        width: 210px;
        height: 210px;
        border-radius: 10px;

        transition: background-color 70ms;
        &:hover {
            background-color: var(--primary);
            #icon, #subtitle {
                color: rgb(32,32,32);
            }
        }
    }
    .icon {
        font-size: 45px;
        transition: color 70ms;
        color: rgb(64,64,64);
    }
    .subtitle {
        font-family: Montserrat;
        font-weight: 700;
        margin-top: 5px;
        color: rgb(64,64,64);
    }
`


const t = {
    tooltip: {
        en: 'Click here to add a new note',
    },
    subtitle: {
        en: 'Add a new note',
    },
}


export function NewNote({ ...props }) {
    return (
        <Styled_Div 
            className='container flex column ai-center jc-center pointer-cascade' 
            title={t.tooltip.en}
            {...props}
        >
            {/* ======== ICON ======== */}
            <MdAddCircle className='icon' />
            
            {/* ======== SUBTITLE ======== */}
            <p className='subtitle' >{t.subtitle.en}</p>

        </Styled_Div>
    )
}