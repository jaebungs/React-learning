import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
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

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>${amount}-</p>
        <p>Created: {createdAt}</p>
        
        <button onClick={() => {dispatch(removeExpense({id}))}}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);