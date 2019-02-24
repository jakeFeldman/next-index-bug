// PACKAGES
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
// LAYOUT
import { H1 } from 'layout/Headings.style';

/**
 * @type {React.Component}
 */
export default class Posts extends React.Component {
    static getInitialProps ({ query, pathname }) {
        return { query, pathname };
    }

    render () {
        return (
            <div>
                <H1>Posts</H1>
                <Link href="/"><a>Home</a></Link><br />
                <button onClick={() => Router.push('/')}>HOME</button>
                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>
            </div>
        );
    }
}
