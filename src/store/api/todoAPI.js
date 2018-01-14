import axios from 'axios'

const ROOT_API = '/todo'

const api = str => ROOT_API.concat(str)

export const fetchTodoAPI = () => axios.get(api(''))
export const addTodoAPI = body => axios.post(api(''), body)
export const deleteTodoAPI = id => axios.delete(api(`/${id}`))
export const toggleTodoAPI = id => axios.put(api(`/${id}`))



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
