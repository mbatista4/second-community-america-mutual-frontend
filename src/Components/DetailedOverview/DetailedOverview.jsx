import React from 'react';
import './DetailedOverview.css';
import TransactionTable from '../TransactionTable/TransactionTable';
import BankAccount from '../BankAccount';

export default function DetailedOverview() {

    

    return(
        <body className="DetailedOverview-page">


            <TransactionTable transactionList={[]} />
            


           </body>

        
    )
}