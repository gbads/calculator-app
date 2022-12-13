import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'

function App() {
  const calcApp = {
    title: 'A Simple Calculator',
    authors: 'Mirim, Gabbie, Rafael, Brandon'
  }

  return (
    <div className="App">
      <Header title={calcApp.title}/>
      <Main/>
      <Footer author={calcApp.authors}/>
    </div>
  );
}

export default App;
