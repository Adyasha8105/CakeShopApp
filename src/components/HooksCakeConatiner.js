import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function HooksCakeConatiner() {
  const numOfCakes = useSelector(state => state.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
    </div>
  );
}

export default HooksCakeConatiner;