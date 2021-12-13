import React from 'react'
import Transaction from './Transaction'
import './transaction.css'


export default function TransactionTable({transactionList}) {
    return (
        <table className="transaction-table" >
            <thead>
                <tr className="table-row">
                    <th>Posted Date</th>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactionList.map((transaction, idx) => {  return <Transaction transaction={transaction} key={idx}/>})}
            </tbody>
            
        </table>
    )
}
