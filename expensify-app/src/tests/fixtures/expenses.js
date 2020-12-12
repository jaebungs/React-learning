import moment from 'moment';

export default [{
    id: '1',
    description: 'Food',
    note: '',
    amount: 321,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 1021,
    createdAt: moment(0).subtract(5, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 5311,
    createdAt: moment(0).add(5, 'days').valueOf()
}]