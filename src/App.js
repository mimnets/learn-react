import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Monir Khan" job="Kono Kaaj Nai"></Person>
      <Person name="Ponir Khan" job="Khoi Vaaj"></Person>
      <Person name="Jigor Khan" job="Ghee Vaaj"></Person>
      <Person></Person>
      <Friend number="01743762978"></Friend>
    </div>
  );
}

function Person (props){
  console.log(props)
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      <p>{props.job}</p>
    </div>
  )
}

function Friend (props){
  return(
    <div>
      <h3>{props.number}</h3>
      <p>Chakri Bakri Nai</p>
    </div>
  )
}
export default App;
