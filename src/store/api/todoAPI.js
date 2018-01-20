import axios from 'axios'

const ROOT_API = '/todo'

const api = str => ROOT_API.concat(str)

export const fetchTodoAPI = (data, body) => axios.get(api(''))
export const addTodoAPI = (data, body) => axios.post(api(''), body)
export const deleteTodoAPI = (id, body) => axios.delete(api(`/delete/${id}`), body)
export const toggleTodoAPI = (id, body) => axios.put(api(`/${id}`), body)
export const clearTodoAPI = (data, body) => axios.delete(api(`/clear`), body)
