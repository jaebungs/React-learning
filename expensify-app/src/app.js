import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouters';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

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
    amount : 100, 
    createdAt : 700
}))
store.dispatch(addExpense({
    description : 'Rent', 
    amount : 2400, 
    createdAt : 1000
}))

// store.dispatch(setTextFilter('water'))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
// yarn run webpack serve --mode development