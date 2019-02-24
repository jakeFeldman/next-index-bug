// PACKAGES
import { Global } from '@emotion/core';
import React from 'react';
// COMPONENTS
import Footer from 'layout/Footer/Footer';
import Header from 'layout/Header/Header';
// STYLES
import reset from 'styles/reset.style';

export default class Layout extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Global styles={reset} />
                <Header />
                {this.props.children}
                <Footer />
            </React.Fragment>
        );
    }
}
