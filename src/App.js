import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="app-wrapper">
        <Header/>
        <main className="app-wrap">
          <Main/>
        </main>
      <footer></footer>
    </div>
  );
}

export default App;
