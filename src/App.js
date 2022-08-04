import './App.css';
import Book from './components/Book';
import Movies from './components/Movies';
import Preloader from './components/Preloader';

function App(props) {
  return props.isLoading ? (
    <div className="App">
      <Book name="Angular" text="lorem ipsum dolor"/>
      <Book name="React" text="lorem ipsum dolor"/>
      <Book name="Vue" text="lorem ipsum dolor"/>
      <Movies title="Harry Poter" price="1 billion $">
          <p>data children</p>
          <p>data children</p>
          <p>data children</p>
      </Movies>
    </div>
  ) : <Preloader />
}

export default App;
