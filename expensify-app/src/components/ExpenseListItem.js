import React from 'react';
import { Link } from 'react-router-dom';

// This is what I wrote.... bad!
// const ExpenseListItem = (props) => {
//     return props.expenses.map((expense, index) => (
//         <div key={index}>
//             <h3>{index + 1}</h3>
//             <p>{expense.description}</p>
//         </div>
//     ))
// }

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>${amount}-</p>
        <p>Created: {createdAt}</p>
    </div>
);

export default ExpenseListItem;