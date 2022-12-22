import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react";
import App from "../App";

test('renders the landing page', () => {
  render(<App />);
});

  