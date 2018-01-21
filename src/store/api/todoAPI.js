import axios from 'axios'

const ROOT_API = '/todo'

const api = str => ROOT_API.concat(str)

export const fetchTodoAPI = (data, body) => axios.get(api(''))
export const addTodoAPI = (data, body) => axios.post(api(''), body)
export const toggleTodoAPI = (data, body) => axios.put(api(`/${data.content}`), body)
export const deleteTodoAPI = (data, body) => axios.delete(api(`/delete/${data.content}`),  { data: body })
export const clearTodoAPI = (data, body) => axios.delete(api(`/clear`), { data: body })
