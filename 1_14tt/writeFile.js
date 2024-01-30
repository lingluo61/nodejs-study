//引入fs模块
const fs = require('fs')

/*
//fs.writeFile('文件路径', '写入内容', '编码格式', '回调函数')
//写入时是覆盖式写入，会替换原来内容
fs.writeFile('./file/2.txt', 'I am Nodejs', 'utf8', function(err) {
    console.log(err)
})
*/


fs.writeFile('./file/3.txt', 'abc123', 'utf8', function(err) {
    if(err) {
        return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！')
})