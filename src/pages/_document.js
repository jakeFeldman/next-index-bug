// PACKAGES
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

/**
 * @type {React.Component}
 * @description Server side document override, used to insert global meta, styles,
 * etc...
 */
export default class document extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render () {
        return (
            <html lang="en">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
