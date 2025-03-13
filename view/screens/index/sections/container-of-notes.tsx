import { css } from 'styled-components'
import ContainerOfNotes from '../../../../view/components/containers/container-of-notes'
import ControllerOfNotes from '../../../../view/components/controllers/controller-of-notes'


const styles = {
    title: css`
        font-family: Montserrat;
        font-weight: 700;
    `,
}


const content = {
    title: {
        en: 'RECORD YOUR NOTES HERE'
    },
}


export default function SectionContainerOfNotes({ style }) {

    return (
        <section style={style} className="width-max"  >
            {/* @ts-ignore */}
            <p css={styles.title} className="text-center" >{content.title.en}</p>

            {/* @ts-ignore */}
            <ControllerOfNotes 
                // style={{ marginTop: -25 }} className="absolute" 
            />

            <ContainerOfNotes style={{ marginTop: 15 }} />
        </section>
    )
}