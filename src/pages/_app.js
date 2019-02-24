// PACKAGES
import React from 'react';
import App, { Container } from 'next/app';
// COMPONENTS
import Layout from 'layout/Layout/Layout';

/**
 * @type {React.Component}
 * @descrition App Component override
 */
export default class Application extends App {
    static async getInitialProps ({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render () {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Container>
        );
    }
}
