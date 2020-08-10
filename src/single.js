// var Singleton = function( name ){
//   this.name = name;
//  };
//  Singleton.prototype.getName = function(){
//   alert ( this.name );
//  };
//  Singleton.getInstance = (function(){
//   var instance = null;
//   return function( name ){
//   if ( !instance ){
//   instance = new Singleton( name );
//   }
//   return instance;
//   }
//  })(); 

// let Singleton = function () { }
// Singleton.getInstance = (function () {
//   let instance = null
//   return function (name) {
//     if (!instance) {
//       instance = new Singleton(name)
//     }
//     return instance
//   }
// }())


const getLogin = (function(){
  let instance
  return function() {
    if (!instance) {
      instance = Promise.resolve(1)
    }
    return instance
  }
}())

getLogin().then(res => console.log(res)) 