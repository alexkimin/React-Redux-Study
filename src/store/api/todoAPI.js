import axios from 'axios'
import { pipe } from 'libs'
import {
  TODO_FETCH_PENDING,
  TODO_FETCH_SUCCESS,
  TODO_FETCH_FAILURE
} from '../modules/Todo'

const ROOT_API = '/todo'

const api = str => ROOT_API.concat(str)

export const fetchTodoAPI = dispatch => {
  dispatch({ type: TODO_FETCH_PENDING })
  axios.get(api(''))
    .then(res =>
      dispatch({ type: TODO_FETCH_SUCCESS , payload: res.data}))
    .catch(err => dispatch({ type: TODO_FETCH_FAILURE }))
}
