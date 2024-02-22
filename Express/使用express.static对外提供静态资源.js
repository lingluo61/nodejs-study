const express = require('express')
const app = express()

// 在这里，调用 express.static() 方法，快速对外提供静态资源
// 访问静态资源文件时，express.static() 函数会根据目录的添加顺序查找所需的文件
app.use('/files', express.static('./files'))
app.use(express.static('./code'))

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})