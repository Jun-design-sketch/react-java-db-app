import { useState } from 'react';
import { PropTypes } from 'prop-types';
import './Counter.css'

export default function Counter({by}) {

  // array [0, f]
  // declaration of state makes array
  // [value, function]
  // to use easiest way, use array left side
  // for example
  // const array = [1, 2]
  // const [firstElt, secondElt] = array
  const [count, setCount] = useState(0);

  console.log(by)

  function incrementCounterFunction() {

    setCount(count + by);
  }

  function decresementCounterFunction(){

    setCount(count - by);
  }

  return (
    <div className="Counter">
      <span className="count">{count}</span>
      <div>
        <button className="counterButton"
                onClick={incrementCounterFunction}
        >+{by}</button>
        <button className="counterButton"
                onClick={decresementCounterFunction}
        >-{by}</button>
      </div>
    </div>
  )
}

Counter.propTypes = {
  by: PropTypes.number
}

Counter.defaultProps = {
  by: 1
}