const express = require('express')
const app = express()

// // 定义一个最简单的中间件函数
// const mw = function (req, res, next) {
//   console.log('这是最简单的中间件函数')
//   // 把流转关系，转交给下一个中间件或路由
//   next()
// }

// // 将 mw 注册为全局生效的中间件
// app.use(mw)

// 这是定义全局中间件的简化形式
app.use((req, res, next) => {
  console.log('这是最简单的中间件函数')
  next()
})

app.get('/', (req, res) => {
  res.send('Home Page.')
})
app.get('/user', (req, res) => {
  res.send('User Page.')
})

app.listen(80, () => {
  console.log('http://127.0.0.1')
})