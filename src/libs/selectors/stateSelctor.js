export const getViewState = state => Object.assign({}, state, {
//   If you put all your calculated state in selectors, you:
//
// Reduce the complexity of your reducers & components
// Decouple the rest of your app from your state shape
// Obey the single source of truth principle, even within your reducer

  // return a list of users active during this session
  // recentlyActiveUsers: [...new Set(state.chatLog.map(chat => chat.user))]
});


export const getTodo = state => state
