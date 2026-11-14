import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import MapPlaceholder from './components/MapPlaceholder';
import './App.css';

function App() {
  return (
    <div className="travel-app">
      <Header />

      <main className="main-content">
  
        <SearchPanel />
        <MapPlaceholder />
      </main>

    
    </div>
  );
}

export default App;