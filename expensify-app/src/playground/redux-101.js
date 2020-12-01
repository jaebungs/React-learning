 import { createStore } from 'redux';

//  action generators - return action objs
 const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
    // without destructuring argument
    // argument (payload = {}) 
    // incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
 });

 const decrementCount = ({ decrementBy = 1} = {}) => ({
     type: 'DECREMENT',
     decrementBy
 })

 const resetCount = () => ({
    type: 'RESET'
 })

 const setCount = ({ count } = {}) => ({
     type: 'SET',
     count
 })

 const store = createStore((state = { count: 0 }, action) => {
     switch (action.type){
         case 'INCREMENT':
            //  const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
             return {
                count: state.count + action.incrementBy  
             };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
     }
     
 });

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

});


//  Action to change state - manual.
// This is not good, when there is a typo, no error shows
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 2
// });
// store.dispatch({
//     type: 'INCREMENT'
// });


store.dispatch(incrementCount({ incrementBy: 10 }))
store.dispatch(incrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 5 }))
store.dispatch(resetCount());
store.dispatch(setCount({ count: 1000 }))

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// })
// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'SET',
//     count: 1000
// })
// unsubscribe()

// store.dispatch({
//     type: 'RESET'
// })

