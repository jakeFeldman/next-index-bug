// PACKAGES
import styled from '@emotion/styled';
// STYLES
import { colors } from 'styles/theme.style.js';

export const Post = styled.article`
    padding: 3rem;
    border: .5rem solid ${colors.primary};
`;

export const PostBody = styled.div`
    padding: 2rem;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const PostImage = styled.img`
    width: 100%;
    max-width: 20rem;
    padding: 2rem;
`;
