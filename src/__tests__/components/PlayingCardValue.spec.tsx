import React from 'react';
import { render, screen } from '@testing-library/react';
import { PlayingCardValue } from '../../components';

test('Renders ace', () => {
  render(<PlayingCardValue  color='hearts' suit='ace' />);
  const value = screen.getByText(/A/);
  expect(value).toBeInTheDocument();
});
test('Renders king', () => {
  render(<PlayingCardValue  color='hearts' suit='king' />);
  const value = screen.getByText(/K/);
  expect(value).toBeInTheDocument();
});
test('Renders queen', () => {
  render(<PlayingCardValue  color='hearts' suit='queen' />);
  const value = screen.getByText(/Q/);
  expect(value).toBeInTheDocument();
});
test('Renders jack', () => {
  render(<PlayingCardValue  color='hearts' suit='jack' />);
  const value = screen.getByText(/J/);
  expect(value).toBeInTheDocument();
});
test('Renders 8', () => {
  render(<PlayingCardValue  color='hearts' suit='8' />);
  const value = screen.getByText(/8/i);
  expect(value).toBeInTheDocument();
});