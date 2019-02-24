// PACKAGES
import { mount } from 'enzyme';
import React from 'react';
// COMPONENT
import Posts from './Posts';

describe('Posts', () => {
    it('renders the Posts page', () => {
        const container = mount(<Posts />);
        expect(container.exists()).toBe(true);
    });
});
