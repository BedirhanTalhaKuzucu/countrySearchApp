import './App.css';
import AppRouter from './AppRouter/AppRouter';
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
        {/*  <Home /> */}
      </header>
    </div>
  );
}

export default App;
