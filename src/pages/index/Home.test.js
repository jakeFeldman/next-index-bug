// PACKAGES
import { mount } from 'enzyme';
import React from 'react';
// COMPONENT
import Home from './Home';

describe('Home', () => {
    it('renders the Home page', () => {
        const container = mount(<Home />);
        expect(container.exists()).toBe(true);
    });
});
