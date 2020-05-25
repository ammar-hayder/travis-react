import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/A demo react app for Travis configuration for git hub pages/i);
  expect(linkElement).toBeInTheDocument();
});
