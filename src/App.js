import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Rockets from './Components/Rockets';
import Missions from './Components/Missions';
import Profile from './Components/Profile';
import { Provider } from 'react-redux';
import { store } from './Redux/Missions/missions';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Rockets />} />
            <Route path="/missions" element={<Missions />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
