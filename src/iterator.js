let Iterator = function (obj) {
  let current = 0
  let next = () => {
    current += 1
  }
  let isDone = () => {
   return current >= obj.length
  }

  let getCurrItem = () => {
    return obj[current]
  }

  return {
    next,
    isDone,
    getCurrItem
  }
}