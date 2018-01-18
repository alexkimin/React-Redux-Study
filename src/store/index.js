import configureStoreDev from './configureDev'
import configureStoreProd from './configureProd'
import { fetchTodo } from 'store/modules/Todo'


const store = process.env.NODE_ENV === 'development'
  ? configureStoreDev()
  : configureStoreProd()

// get init todo fetching
store.dispatch(fetchTodo('init dispatch'))

export default store
