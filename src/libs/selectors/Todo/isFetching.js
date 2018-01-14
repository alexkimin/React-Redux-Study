import { createSelector } from 'reselect'
import { TODO_FETCH } from  'store/modules/Todo'

const selectFetching = (state, props) => state.pender.pending[TODO_FETCH]

const getIsFetching = isfetching => isfetching

export default createSelector(
  [selectFetching],
  getIsFetching
)
