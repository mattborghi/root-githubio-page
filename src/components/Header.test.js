import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
  const { getByText } = render(<Header resumeData={{name: "asd"}} buttons={[]}/>);
  const linkElement = getByText(/asd/i);
  expect(linkElement).toBeInTheDocument();
});
