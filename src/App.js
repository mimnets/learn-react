import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Aladdin', 'Joshimuddin', 'Kolimuddin','Solimuddin', 'Dalimuddin'];
  const friends = [
    {fname:'Monir', fage:23},
    {fname:'Ponoir', fage:33},
    {fname:'Konir', fage:43},
    {fname:'donir', fage:13}
  ]
 
  return (
    
    <div className="App">
       {
      heros.map(hero => <Person name={hero}></Person>)
      }
      {
      friends.map(friend => <Friend name={friend.fname}></Friend>)
      }
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
    <div className='person'>
      <h3>{props.name}</h3>
      <p>{props.age}</p>
    </div>
  )
}
export default App;
