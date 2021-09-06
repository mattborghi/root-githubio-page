import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar';

test('header links', () => {
    const buttons = [{
        name: 'Title',
        path: 'www.asd.com',
        alt: 'Alternative Text'
    }]

    buttons.forEach(({name, path, alt}) => {
        const { getByText } = render(<NavigationBar buttons={buttons} />);
        const linkElement = getByText(name);
        expect(linkElement).toBeInTheDocument();

        expect(document.querySelector(`[alt="${alt}"]`)).toBeInTheDocument()

        expect(linkElement).toHaveAttribute('href', path)
    });
});
