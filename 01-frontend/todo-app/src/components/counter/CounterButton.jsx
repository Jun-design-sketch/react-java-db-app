import { useState } from 'react';
import { PropTypes } from 'prop-types';

export default function CounterButton({by, incrementMethod, decrementMethod}) {

  // [value, function]
  // const array = [1, 2]
  // const [firstElt, secondElt] = array
  const [count, setCount] = useState(0);

  function incrementCounterButtonFunction() {
    setCount(count + by);
    incrementMethod(by);
  }

  function decresementCounterButtonFunction(){
    setCount(count - by);
    decrementMethod(by);
  }

  return (
    <div className="CounterButton">
      <div>
        <button className="counterButton"
                onClick={incrementCounterButtonFunction}
        >+{by}</button>
        <button className="counterButton"
                onClick={decresementCounterButtonFunction}
        >-{by}</button>
      </div>
    </div>
  )

}

CounterButton.propTypes = {
  by: PropTypes.number
}

CounterButton.defaultProps = {
  by: 1
}