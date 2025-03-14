

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Helmet } from 'react-helmet'
// ts
import { DocumentContext } from 'next/document'



export default class MyDocument extends Document {
  // getInitialProps
  static async getInitialProps(ctx: DocumentContext) {

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
  
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)
      return ({
        ...initialProps,
        helmet: Helmet.renderStatic(), 
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      })
    } finally {
      sheet.seal()
    }
  }


  // should render on <html>
  get helmetHtmlAttrComponents() {
    // @ts-ignore
    return this.props.helmet.htmlAttributes.toComponent()
  }
  
  // should render on <body>
  get helmetBodyAttrComponents() {
    // @ts-ignore
    return this.props.helmet.bodyAttributes.toComponent()
  }
  
  // should render on <head>
  get helmetHeadComponents() {
    // @ts-ignore
    return Object.keys(this.props.helmet)
    .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
    // @ts-ignore
      .map((el) => this.props.helmet[el].toComponent())
  }

  
  // render
  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>{this.helmetHeadComponents}</Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}