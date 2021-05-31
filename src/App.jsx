import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    console.log(cash)

    const addCash = (cash) => {
        dispatch({type: "ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type: "GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch({type: "ADD_CUSTOMER", payload: customer})
    }

    const removeCustomer = (customer) => {
        dispatch({type: "REMOVE_CUSTOMERS", payload: customer.id})
    }

    return (
        <div className={'app'}>
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => getCash(Number(prompt()))}>Удалить клиента</button>
            </div>
            {customers.length > 0 ?
                <div>
                    {customers.map(customer =>
                        <div onClick={() => removeCustomer(customer)} style={{
                            fontSize: "2rem",
                            border: '1px solid black',
                            padding: '10px 20px'
                        }}>{customer.name}</div>
                    )}
                </div>
                :
                <div style={{fontSize: "2rem", marginTop: 20}}>
                    Клиенты отсутствуют!
                </div>
            }
        </div>
    );
}

export default App;
