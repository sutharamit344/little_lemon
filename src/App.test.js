import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom"
import Bookingpage from './component/booking';


  test("selected date have slots", () => {
    render(<Bookingpage/>)
    const dateElement = screen.getBYLabelText("date")
    const timeElement = screen.getBYLabelText("time")

    fireEvent.change(dateElement, {target:{value: "2024-08-23"}})
    
    expect(timeElement).toBe("Select time")
  })