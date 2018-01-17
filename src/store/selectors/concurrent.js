import { createSelector } from 'reselect'

const selectConUser = (state, props) => state.User.get('conUser')
const getConcurrentUsers= users => users

export default createSelector(
  [selectConUser],
  getConcurrentUsers
)
