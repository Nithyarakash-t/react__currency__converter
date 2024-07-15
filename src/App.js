import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import { Themetoggle } from './components/themetoggle/Themetoggle';

function App() {
  return (
    <div className="app-wrapper">
        <Themetoggle/>
        <Header/>
        <main className="app-wrap">
          <Main/>
        </main>
      <footer></footer>
    </div>
  );
}

export default App;
