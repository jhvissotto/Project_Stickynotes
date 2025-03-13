import { Html, Head, Body } from '../../view/components/_framework/helmet'


export default function DocumentStandard({ title, children: layout }) {

    return (
        // @ts-ignore 
        <Html>
            <Head>

                {/* LOGOMARK */}
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>

                {/* FONTS */}
                <link rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Russo+One&display=swap" />
                <link rel="stylesheet"  href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" />

            </Head>
            {/* @ts-ignore */}
            <Body>
                {layout}
            </Body>
        </Html>
    )
}