import './App.css';
import ListProvider from './context/ListContext';
import Shop from './views/Shop/Shop';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <Shop />
      </div>
    </ListProvider>
  );
}

export default App;
