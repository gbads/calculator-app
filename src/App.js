import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import Screen from './components/Screen'

function App() {
  const calcApp = {
    title: 'A Simple Calculator',
    authors: 'Mirim, Gabbie, Rafael, Brandon'
  }

  return (
    <div className="App">
      <Header title="Calculator App"/>
      <Main />
      <Footer author={calcApp.authors} />
      <Screen />
    </div>
  );
}

export default App;
