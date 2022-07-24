import './App.css';
import Nav from './Nav';
import Section from './Section';
import data from './Database'

// console.log(data);

function App() {

  let travelCard = data.map(obj => {
    return <Section key={obj.id} obj={obj}/>
  })

  return (
    <div className="App">
        <Nav />
        {travelCard}
    </div>
  );
}

export default App;
