import './App.css';
import { Provider } from 'react-redux';
import store from './state/store';
import MarbleDashbord from './pages/MarbleDashbord';
import { DataContext } from './data/MainContext';

const App = () => {
  const title = document.querySelector('title');
  title.innerText = `Dashboard | Go Marble`;

  return (
    <DataContext>
      <Provider store={store}>
        <div className="App">
          <MarbleDashbord />
        </div>
      </Provider>
    </DataContext>
  );
}

export default App;
