import './App.css';
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

function App() {
  return (
    <div className="App">
      <TodoApp />
      {/* <Counter /> */}
    </div>
  );
}

// object notation and property name
function PlayingWithProps({property1, property2}){
  console.log(property1)
  console.log(property2)

  return (
    <div>Props</div>
  )
}

export default App;
