import React from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const Balance = () => {
    const {transactions} = React.useContext(GlobalContext);
   
    const amounts = transactions.map(transactions => transactions.amount);
    const total = amounts.reduce((val,total) => (val+=total),0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${total}</h1>
        </>
    )
}
