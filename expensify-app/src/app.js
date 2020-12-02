import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
    description : 'Water bill', 
    note : 'December water bill', 
    amount : 30, 
    createdAt : 1300 
}))
store.dispatch(addExpense({
    description : 'Gas bill', 
    note : 'Nov gas bill', 
    amount : 80, 
    createdAt : 700
}))
store.dispatch(setTextFilter('gas'))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);



ReactDOM.render(<AppRouter />, document.getElementById('app'));
// yarn run webpack serve --mode development