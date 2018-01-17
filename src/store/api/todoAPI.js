import axios from 'axios'

const ROOT_API = '/todo'

const api = str => ROOT_API.concat(str)

export const fetchTodoAPI = () => axios.get(api(''))
export const addTodoAPI = body => axios.post(api(''), { text: body.text })
export const deleteTodoAPI = (id, delay) =>
  new Promise(resolve =>
    setTimeout(() =>
    resolve(axios.delete(api(`/delete/${id}`))),
    delay
  )
)
export const toggleTodoAPI = id => axios.put(api(`/${id}`))
export const clearTodoAPI = () => axios.delete(api(`/clear`))
