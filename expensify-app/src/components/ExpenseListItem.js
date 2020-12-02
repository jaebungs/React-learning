import React from 'react';

// This is what I wrote.... bad!
// const ExpenseListItem = (props) => {
//     return props.expenses.map((expense, index) => (
//         <div key={index}>
//             <h3>{index + 1}</h3>
//             <p>{expense.description}</p>
//         </div>
//     ))
// }

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>${amount}</p>
    </div>
);



export default ExpenseListItem;