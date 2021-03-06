import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


// const date = new Date();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt): moment(),
            calenderFocused: false,
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;

        this.setState(()=>({ description }));
    }

    onNoteChange = (e) => {
        const note = e.target.value;

        this.setState(()=>({ note }));
    }

    onAmountChange =(e) => {
        const amount = e.target.value
        // Allows at least one number and up to two decimal points
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>({amount}));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(()=>({ createdAt }))
        };
    }

    onFocusChange = ({ focused } ) => {
        this.setState(()=>({ calenderFocused: focused }))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // set error state when there is no description or amount
            this.setState(()=>({ error: 'Please fill the form' }))
        } else {
            this.setState(()=>({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error !== '' && <p>{this.state.error}</p>}
                    <input 
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=> false}
                    />
                    <textarea
                        placeholder="Add note about your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}