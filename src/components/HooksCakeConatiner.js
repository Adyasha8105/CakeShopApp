import React from 'react';
import { useSelector } from 'react-redux'

function HooksCakeConatiner() {
  const numOfCakes = useSelector(state => state.numOfCakes)

  return (
    <div>
      <h2>Num of Cakes - {numOfCakes}</h2>
      <button>Buy cakes</button>
    </div>
  );
}

export default HooksCakeConatiner;