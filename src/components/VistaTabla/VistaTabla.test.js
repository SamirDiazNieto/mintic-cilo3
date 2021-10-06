import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VistaTabla from './VistaTabla';

describe('<VistaTabla />', () => {
  test('it should mount', () => {
    render(<VistaTabla />);
    
    const vistaTabla = screen.getByTestId('VistaTabla');

    expect(vistaTabla).toBeInTheDocument();
  });
});