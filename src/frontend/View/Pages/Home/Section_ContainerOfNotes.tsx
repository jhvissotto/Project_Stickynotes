import { HTMLProps } from 'react'
import { styled } from 'styled-components'
import { Containers, Controllers } from '@/src/frontend/View/Components'


const Styled_Section = styled.section`
    .title {
        font-family: Montserrat;
        font-weight: 700;
    }
` 


const t = {
    title: {
        en: 'RECORD YOUR NOTES HERE'
    },
}


export function Section_ContainerOfNotes({ style }: HTMLProps<HTMLElement>) {
    return (
        <Styled_Section style={style} className='width-max'  >
            <p className='title text-center' >{t.title.en}</p>

            <Controllers.Notes 
                // style={{ marginTop: -25 }} className='absolute' 
            />

            <Containers.Notes style={{ marginTop: 15 }} />
        </Styled_Section>
    )
}