import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom"
import Bookingpage from './component/booking';


test('renders the Reservation Form heading', () => {
    render(<Bookingpage />);
    const headingElement = screen.getByText(/reservation form/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders input fields and labels', () => {
    render(<Bookingpage />);
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guest/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test('disables submit button if form is invalid', () => {
    render(<Bookingpage />);
    const submitButton = screen.getByRole('button', { name: /reserve/i });
    expect(submitButton).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-08-25' } });
    fireEvent.change(screen.getByLabelText(/guest/i), { target: { value: 2 } });

    expect(submitButton).toBeEnabled();
  });

  test('updates form state when inputs change', () => {
    render(<Bookingpage />);

    fireEvent.change(screen.getByLabelText(/date/i), { target: { value: '2024-08-25' } });
    fireEvent.change(screen.getByLabelText(/time/i), { target: { value: '12:00 PM' } });
    fireEvent.change(screen.getByLabelText(/guest/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    expect(screen.getByLabelText(/date/i).value).toBe('2024-08-25');
    expect(screen.getByLabelText(/time/i).value).toBe('12:00 PM');
    expect(screen.getByLabelText(/guest/i).value).toBe('2');
    expect(screen.getByLabelText(/occasion/i).value).toBe('Birthday');
  });



  test('disables time selection when no date is selected', () => {
    render(<Bookingpage />);
    const timeSelect = screen.getByLabelText(/time/i);
    const dateInput = screen.getByLabelText(/date/i);
    
    expect(timeSelect).toBeDisabled();
    
    fireEvent.change(dateInput, { target: { value: '2024-08-25' } });
    
    expect(timeSelect).toBeEnabled();
  });
