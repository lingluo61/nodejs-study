//导入 express 模块
const express = require('express')

//创建 web 服务器
const app = express()

//监听客户端的 GEt 和 POST 请求，并向客户端响应具体的内容
app.get('/get', (req, res) => {
    //调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
    res.send({ name: '张三', age: 20, gender: '男' })
})
app.post('/post', (req, res) => {
    //调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
    res.send('请求成功')
})

//启动 web 服务器
app.listen(80, () => {
    console.log('服务器启动成功 http://127.0.0.1')
})