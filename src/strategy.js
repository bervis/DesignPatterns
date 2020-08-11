// 奖金策略
// let strategies = {
//   'S': function (salary) {
//     return salary * 4
//   },
//   'A': function (salary) {
//     return salary * 3
//   },
//   'B': function (salary) {
//     return salary * 2
//   }
// }

// let calculateBonus = function(level, salary) {
//   return strategies[level](salary)
// }

// console.log( calculateBonus('A', 5000))

var strategies = {
  isNonEmpty: function (value, errorMsg) {
    console.log(value, errorMsg)
    if (value === '') {
      console.log('------')
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  }
};

let a = strategies['isNonEmpty'].apply('wgf', ['', '不会错的'])
console.log(a)


// var Validator = function () {
//   this.cache = [];
// };

// Validator.prototype.add = function (value, rules) {
//   var self = this
//   for (var i = 0, rule; rule = rules[i++];) {
//     (function (rule) {
//       var strategyAry = rule.strategy.split(':');
//       var errorMsg = rule.errorMsg;
//       self.cache.push(function () {
//         var strategy = strategyAry.shift();
//         strategyAry.unshift(value);
//         strategyAry.push(errorMsg);
//         console.log(value, strategyAry, '--------')
//         return strategies[strategy].apply(value, strategyAry);
//       });
//     })(rule)
//   }
// };


// Validator.prototype.start = function () {
//   for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
//     var errorMsg = validatorFunc();
//     if (errorMsg) {
//       return errorMsg;
//     }
//   }
// };

// var validataFunc = function () {

//   let registerForm = {
//     userName: '',
//     password: '123',
//     phoneNumber: 12345
//   }
//   var validator = new Validator();
//   validator.add(registerForm.userName, [{
//     strategy: 'isNonEmpty',
//     errorMsg: '用户名不能为空'
//   }, {
//     strategy: 'minLength:6',
//     errorMsg: '用户名长度不能小于 10 位'
//   }]);
//   validator.add(registerForm.password, [{
//     strategy: 'minLength:6',
//     errorMsg: '密码长度不能小于 6 位'
//   }]);
//   validator.add(registerForm.phoneNumber, [{
//     strategy: 'isMobile',
//     errorMsg: '手机号码格式不正确'
//   }]);
//   var errorMsg = validator.start();
//   return errorMsg;
// }

// let error = validataFunc()
// console.log(error)