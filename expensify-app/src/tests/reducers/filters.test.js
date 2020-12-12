import filtersReducers from '../../reducers/filters';
import moment from 'moment'

test('should setup default filter values', () => {
    const state = filtersReducers(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUT' });
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducers(currentState, action);

    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'testing';
    const state = filtersReducers(undefined, { type: 'SET_TEXT_FILTER', text})

    expect(state.text).toBe(text)
})

test('should set start date filter', () => {
    const startDate = moment();
    const state = filtersReducers(undefined, { type: 'SET_START_DATE', startDate })

    expect(state.startDate).toEqual(startDate);
})

test('should set start date filter', () => {
    const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    }
    const state = filtersReducers(undefined, action)

    expect(state.endDate).toEqual(endDate);
})