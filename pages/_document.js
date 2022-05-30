import 
Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(){
        return (
            <Html>
                <Head>
                    <link rel="shortcut icon" href="img/favicon.svg" />
                    <link rel="stylesheet" href="css/bootstrap.min.css" />
                    <link rel="stylesheet" href="css/animate.css" />
                    <link rel="stylesheet" href="css/LineIcons.css" />
                    <link rel="stylesheet" href="css/owl.carousel.css" />
                    <link rel="stylesheet" href="css/owl.theme.css" />
                    <link rel="stylesheet" href="css/magnific-popup.css" />
                    <link rel="stylesheet" href="css/nivo-lightbox.css" />
                    <link rel="stylesheet" href="css/main.css" /> 
                    <link rel="stylesheet" href="css/responsive.css" />
                    <link rel="stylesheet" href="font-awesome/font-awesome/font-awesome.css" />
                    <link rel="stylesheet" href="css/common.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument