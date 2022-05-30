import
Script from 'next/script'
import
Head from 'next/head'

export default ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="description" content="" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>CodeHub Technological Institute</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="keywords" content="CodeHub, Web Development, Next JS, Business, Service" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="author" content="CodeHub CTI" />
                <title>CodeHub Technological Institute</title>
            </Head>
            <Component className = "po-rel" style = {{zIndex: 0}} {...pageProps} />
        </>
    )
}
