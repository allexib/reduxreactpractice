import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    const addCash = () => {
        dispatch({type:"ADD_CASH", payload: 5})
    }

    const getCash = () => {
        dispatch({type:"GET_CASH", payload: 5})
    }

  return (
    <div className={'app'}>
      <div style={{fontSize:"3rem"}}>{cash}</div>
      <div style={{display:"flex"}}>
        <button onClick={() => addCash()}>Пополнить счет</button>
        <button onClick={() => getCash()}>Снять со счета</button>
      </div>
    </div>
  );
}

export default App;
