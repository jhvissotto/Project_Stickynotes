import { Fragment as Layout } from 'react'

import { Section_ContainerOfNotes } from './Section_ContainerOfNotes'


export function Home() {
    return (
        <Layout>
            <Section_ContainerOfNotes style={{ marginTop: 50 }} />
        </Layout>
    )
}