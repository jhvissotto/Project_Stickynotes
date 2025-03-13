import { css } from 'styled-components'
import Text from '../../../../view/components/_framework/text'
import cn from 'classnames'


const styles = {
    container: css`
        height: 70px;
        background: linear-gradient(var(--primary-gradient-ini), var(--primary-gradient-end))
    `,
    title: css`
        font-family: 'Russo One';
        font-weight: 100;
        font-size: 26px;
    ` 
}


export default function Header({ className, ...props }) {
    return (
        <header
            /* @ts-ignore */
            css={styles.container} 
            className={cn('flex jc-center ai-center', className)} 
            {...props} 
        >
            {/* @ts-ignore */}
            <h1 css={styles.title} >STICKY NOTE</h1>
            {/* <Text as="h1" css={styles.title} >STICKY NOTE</Text> */}
        </header>
    )
}