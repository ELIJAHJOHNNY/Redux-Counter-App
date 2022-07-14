import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../redux/slice'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div className='container'>
        <p id='counter-value'>Count: {count} </p>
        <button id='increase-button' onClick={() => dispatch(increment())}>Increase</button>
        <button id='decrease-button' onClick={() => dispatch(decrement())}>Decrease</button> <br/>
        <button id='reset-button' onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter