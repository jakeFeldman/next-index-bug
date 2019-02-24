// PACKAGES
import { mount } from 'enzyme';
import React from 'react';
// COMPONENT
import Footer from './Footer';

describe('Footer', () => {
    it('renders the Footer', () => {
        const container = mount(<Footer />);
        expect(container.exists()).toBe(true);
    });
});
