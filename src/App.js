import './App.css';
import Convert from './components/converter-new/Converter';
import Header from './components/header/header';
import Main from './components/main/main';
import { Themetoggle } from './components/themetoggle-2/Themetoggle';

function App() {
  return (
    <div className="app-wrapper">
        <Themetoggle/>
        <Header/>
        <main className="app-wrap">
          <Main/>
          <Convert/>
        </main>
      <footer></footer>
    </div>
  );
}

export default App;
