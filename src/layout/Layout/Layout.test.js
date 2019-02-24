// PACKAGES
import { mount } from 'enzyme';
import React from 'react';
// COMPONENT
import Layout from './Layout';

describe('Layout', () => {
    it('renders the Layout', () => {
        const container = mount(<Layout />);
        expect(container.exists()).toBe(true);
    });
});
