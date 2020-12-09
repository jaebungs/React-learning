import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends React.Component {

    state = {
        calanderFocused: null
    };

    onDateChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calanderFocused) => {
        this.setState(()=>({ calanderFocused }))
    };

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e)=> {
                    props.dispatch(setTextFilter(e.target.value))
                }} />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e)=>{
                        if (e.target.value === 'date'){
                            this.props.dispatch(sortByDate());
                        }
                        if (e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }
                    }
                }>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="start"
                    endDateId="end"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calanderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={()=> false}
                />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseListFilters);