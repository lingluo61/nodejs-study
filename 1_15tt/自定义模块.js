//console.log(module)

const aa = 50

//向外暴露成员
module.exports.username = '张三'
module.exports.age = 18
module.exports.sayHello = function() {
    console.log('Hello')
}

module.exports.aa = aa