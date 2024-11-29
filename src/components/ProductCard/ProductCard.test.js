import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Correct import without '/extend-expect'
import ProductCard from './ProductCard';

describe('ProductCard Component', () => {

  test('renders product name', () => {
    render(<ProductCard productName="Test Product" quantity={10} />);
    const productNameElement = screen.getByText(/Test Product/i);
    expect(productNameElement).toBeInTheDocument();
  });

  test('renders quantity', () => {
    render(<ProductCard productName="Test Product" quantity={2} />);
    const quantityElement = screen.getByText(/Quantity 2/i);
    expect(quantityElement).toBeInTheDocument();
  });

  test('renders limited stock message when quantity is less than 5', () => {
    render(<ProductCard productName="Test Product" quantity={3} />);
    const limitedStockElement = screen.getByText(/Limited stock/i);
    expect(limitedStockElement).toBeInTheDocument();
    expect(limitedStockElement).toHaveClass('limited-stock');
  });

  test('renders available message when quantity is 5 or more', () => {
    render(<ProductCard productName="Test Product" quantity={5} />);
    const buyNowElement = screen.getByText(/Available buy now/i);
    expect(buyNowElement).toBeInTheDocument();
    expect(buyNowElement).toHaveClass('buy-now');
  });
  
  test('matches snapshot', () => {
    const { asFragment } = render(<ProductCard productName="Test Product" quantity={10} />);
    expect(asFragment()).toMatchSnapshot();
  });

});