import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'

function App() {
  const calcApp = {
    title: 'A Simple Calculator',
    authors: 'Mirim, Gabbie, Rafael, Brandon'
  }

  return (
    <div className="App">
      <Header title={calcApp.title} />
      <Main />
      <Footer author={calcApp.authors} />
    </div>
  );
}

export default App;
