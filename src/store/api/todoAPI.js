import axios from 'axios'
import { pipe } from 'libs'
import { TODO_FETCH } from '../modules/Todo'

const ROOT_API = '/todo'

const api = str => ROOT_API.concat(str)

export const fetchTodoAPI = body => axios.get(api(''))
export const addTodoAPI = body => console.log('adding')



// with redux-promise-middleware
// export const fetchTodoAPI = (dispatch) =>
//   dispatch({
//     type: TODO_FETCH,
//     payload: () => axios.get(api('')).then(res => res.data)
//   })

// without any module
// export const fetchTodoAPI = dispatch => {
//   dispatch({ type: TODO_FETCH_PENDING })
//   axios.get(api(''))
//     .then(res =>
//       dispatch({ type: TODO_FETCH_SUCCESS , payload: res.data}))
//     .catch(err => dispatch({ type: TODO_FETCH_FAILURE }))
// }
