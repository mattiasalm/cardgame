import React from 'react';
import { render, screen } from '@testing-library/react';
import {App} from '../App';

test('Renders shuffle button', () => {
  render(<App />);
  const button = screen.getByText(/shuffle/i);
  expect(button).toBeInTheDocument();
});

test('Renders sort button', () => {
  render(<App />);
  const button = screen.getByText(/sort/i);
  expect(button).toBeInTheDocument();
});

test('Renders add deck button', () => {
  render(<App />);
  const button = screen.getByText(/add deck/i);
  expect(button).toBeInTheDocument();
});

test('Renders reset button', () => {
  render(<App />);
  const button = screen.getByText(/reset/i);
  expect(button).toBeInTheDocument();
});
