import './App.css';
import LearningComponent from './components/learning-examples/LearningComponent';
import Counter from './components/counter/Counter'

function App() {
  return (
    <div className="App">
      {/* <LearningComponent /> */}
      {/* <PlayingWithProps property1="value1" property2="value2" /> */}
      <Counter />
      <Counter by={2}/>
      <Counter by={5}/>
    </div>
  );
}

// {property1: 'value1', property2: 'value2'}
// function PlayingWithProps(properties){
//   console.log(properties.property1)
//   console.log(properties.property2)

//   return (
//     <div>Props</div>
//   )
// }

// object notation and property name
function PlayingWithProps({property1, property2}){
  console.log(property1)
  console.log(property2)

  return (
    <div>Props</div>
  )
}

export default App;
