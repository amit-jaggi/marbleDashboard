import './App.css';
import MarbleDashbord from './pages/MarbleDashbord';

const App = () => {
  const title = document.querySelector('title');
  title.innerText = `Dashboard | Go Marble`;

  return (
    <div className="App">
      <MarbleDashbord />
    </div>
  );
}

export default App;
