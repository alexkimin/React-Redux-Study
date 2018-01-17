import configureStore from './configure'
import { fetchTodo } from 'store/modules/Todo'

const store = configureStore()

// get init todo fetching
store.dispatch(fetchTodo('init dispatch'))

export default store
