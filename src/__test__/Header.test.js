import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from '../components/Header';

describe('Header tests', () => {
  test('should render', () => {
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(header).toMatchSnapshot();
  });

  test('Navigates to Missions page and finds the title', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const missionsPage = screen.getByRole('link', { name: /Missions/i });
    fireEvent.click(missionsPage);

    expect(
      screen.getByRole('heading', { name: /Space Travellers Hub/i })
    ).toBeInTheDocument();
  });
});
