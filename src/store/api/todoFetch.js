import axios from 'axios'
import { pipe } from 'libs'
import store from 'store'

const ROOT_API = '/todo'

const api = str => ROOT_API.concat(str)

export const getAllTodo = () => {
  console.log('called')
  return axios.get(api(''))
    .then(res =>
      store.dispatch({
        type:'todo/TODO_GET', payload:res.data
      })
    )
}
