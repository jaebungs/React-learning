import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [expenses[0], expenses[2]] );
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual( [expenses[0], expenses[1], expenses[2]] );
})

test('should add expense', () => {
    const testExpense = {
        id: '4',
        description: 'dummy',
        note: '',
        amount: 11111,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: testExpense
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses, testExpense])
})

test('should edit expense by id', () => {
    const amount = 241034;

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(amount)
});

test('should not edit expense if no id found', () => {
    const amount = 320532113
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})