import { useState } from 'react';
import './Counter.css'

export default function Counter() {

  // array [0, f]
  // declaration of state makes array
  // [value, function]
  // to use easiest way, use array left side
  // for example
  // const array = [1, 2]
  // const [firstElt, secondElt] = array
  const [count, setCount] = useState(0);

  function incrementCounterFunction() {

    setCount(count + 1);
  }

  function decresementCounterFunction(){

    setCount(count -1);
  }

  return (
    <div classname="Counter">
      <span className="count">{count}</span>
      <div>
        <button className="counterButton"
                onClick={incrementCounterFunction}
        >+1</button>
        <button className="counterButton"
                onClick={decresementCounterFunction}
        >-1</button>
      </div>
    </div>
  )
}