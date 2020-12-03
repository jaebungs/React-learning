import React from "react";
import { editExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) =>{
    console.log(props)
    return (
    <div>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                console.log('updated', expense)
                props.dispatch(editExpense(props.match.params.id, expense))
                props.history.push('/')
            }}
        />
    </div>
)};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);