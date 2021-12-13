import React from 'react'

export default function Transaction({transaction}) {

    let {DateCreated,description,amount} = transaction;

    return (
        <tr className="transaction">
            <td>{DateCreated.split('T')[0]}</td>
            <td>{description}</td>
            <td>{amount}</td>
        </tr>
    )
}
