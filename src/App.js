import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Screen from './components/Screen';
import styles from './styles/App.css';

function App() {
  const calcApp = {
    title: 'A Simple Calculator',
    authors: 'Mirim, Gabbie, Rafael, Brandon'
  }

  return (
    <div className="App">
      <Header title="Calculator App"/>
      {/* Add <Screen /> here if needed, was originally duplicating bounding box */}
      <Main />
      <Footer author={calcApp.authors} />
    
    </div>
  );
}

export default App;
