import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
      <Provider store={store}>
          <Navbar />
          <div className="wrap">
            <Outlet />
          </div>
      </Provider>
  );
}

export default App;
