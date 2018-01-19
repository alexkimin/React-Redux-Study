export const offlineMiddleware = path => store => next => action => {
  // 디스패치마다 미들웨어를 들어오게 됨...
  console.log(action)

  next(action);
}
