// PACKAGES
import { mount } from 'enzyme';
import React from 'react';
// COMPONENT
import Header from './Header';

describe('Header', () => {
    it('renders the Header', () => {
        const container = mount(<Header />);
        expect(container.exists()).toBe(true);
    });
});
