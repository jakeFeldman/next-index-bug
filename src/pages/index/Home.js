// PACKAGES
import React from 'react';
import Link from 'next/link';
// LAYOUT
import { H1, H2, H3 } from 'layout/Headings.style';
// STYLES
import { Post } from './Home.styles';

/**
 * @type {React.Component}
 */
export default class Home extends React.Component {
    render () {
        return (
            <React.Fragment>
                <H1>Home</H1>
                <Link href="/posts?id=1" as="/posts/1">
                    <a>Posts</a>
                </Link>
                <Post>
                    <H2>This is a title</H2>
                    <H3>Sub Heading</H3>
                </Post>
            </React.Fragment>
        );
    }
}
