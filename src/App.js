import './App.css';
import MarbleDashbord from './pages/MarbleDashbord';
import { DataContext } from './data/MainContext';

const App = () => {
  const title = document.querySelector('title');
  title.innerText = `Dashboard | Go Marble`;

  return (
    <DataContext>
      <div className="App">
        <MarbleDashbord />
      </div>
    </DataContext>
  );
}

export default App;
