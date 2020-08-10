// 奖金策略
let strategies = {
  'S': function (salary) {
    return salary * 4
  },
  'A': function (salary) {
    return salary * 3
  },
  'B': function (salary) {
    return salary * 2
  }
}

let calculateBonus = function(level, salary) {
  return strategies[level](salary)
}

console.log( calculateBonus('A', 5000))