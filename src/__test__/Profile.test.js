import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Profile from '../components/Profile';
import store from '../redux/configStore';

describe('Profile tests', () => {
  test('should render', () => {
    const profile = render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
        ,
      </Provider>
    );

    expect(profile).toMatchSnapshot();
  });

  test('Checks if profile page content is there by checking the title', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
        ,
      </Provider>
    );

    expect(
      screen.getByRole('heading', { name: /My Missions/i })
    ).toBeInTheDocument();
  });
});
