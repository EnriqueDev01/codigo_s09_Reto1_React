import './App.css';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import MainContent from './components/MainContent';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="App-content">
        <Sidenav classBgColor="bg-violet"/>
        <MainContent/>                  
      </main>
      <Footer/>      
    </div>
  );
}

export default App;
