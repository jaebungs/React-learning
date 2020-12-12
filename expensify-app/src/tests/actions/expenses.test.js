import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '1234a'});

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234a'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('dummyId', {note: 'Dummy updates'});

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'dummyId',
        updates: {note: 'Dummy updates'}
    })
})

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'dummydescription',
        note: 'dummyNote',
        amount: 231,
        createdAt: 124507456
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup addExpense action object with default values', () => {
    const action = addExpense();
    
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    })
})