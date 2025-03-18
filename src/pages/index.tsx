import { Fragment as MyApp } from 'react'
import Head from 'next/head'

import { Layout, Page } from '@/src/frontend/View'


export default function Page_Index() {
    return (
        <MyApp>
            <Head>
                <link rel='stylesheet'  href='https://fonts.googleapis.com/css?family=Russo+One&display=swap' />
                <link rel='stylesheet'  href='https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap' />

                <link rel='shortcut icon' href='/favicon.ico' />
                <title>Sticky Note Online</title>
            </Head>
            <Layout.Standard>
                <Page.Home />
            </Layout.Standard>
        </MyApp>
    )
}