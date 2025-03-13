import { Body } from '../../../view/components/_framework/helmet'
import Header from './partials/header'
import Main from './partials/main'
import Footer from './partials/footer'


export default function LayoutMain({ children: screen }) {

    return (
        // @ts-ignore
        <Body>
            <Header className="width-max" />
            <Main className="safe-area-view" >
                {screen}
            </Main>
            <Footer />
        </Body>
    )
}