import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


// It's finally time to use dispatch to change redux value!
const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e)=> {
            props.dispatch(setTextFilter(e.target.value))
        }} />
        <select 
            value={props.filters.sortBy}
            onChange={(e)=>{
                if (e.target.value === 'date'){
                    props.dispatch(sortByDate());
                }
                if (e.target.value === 'amount'){
                    props.dispatch(sortByAmount());
                }
            }
        }>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);