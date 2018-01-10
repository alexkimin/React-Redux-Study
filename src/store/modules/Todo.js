import { createAction, handleActions } from 'redux-actions'

// actions
export const GET_TODO = 'GET_TODO'
export const ADD_TODO = 'ADD_TODO'


// Action Creator
//createAction(type, payloadCreator)
export const getTodo = createAction(GET_TODO)
export const addTodo = createAction(ADD_TODO)


// const initialState = getTodo()
const initialState = {
  todos: {

  }
}



export default handleActions({
    [GET_TODO]: (state, action) => {
      console.log(state, action)
        return [...state, action.payload]
    },

}, initialState)




/*
import { createActions, handleActions, combineActions } from 'redux-actions'

const defaultState = { counter: 10 };

const { increment, decrement } = createActions({
  INCREMENT: amount => ({ amount }),
  DECREMENT: amount => ({ amount: -amount })
});

const reducer = handleActions({
  [combineActions(increment, decrement)](state, { payload: { amount } }) {
    return { ...state, counter: state.counter + amount };
  }
}, defaultState);

export default reducer;
*/
