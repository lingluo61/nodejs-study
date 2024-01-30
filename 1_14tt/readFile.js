//导入fs模块，用来操纵文件
const fs = require('fs')

/*
//fs.readFile('文件路径', '编码格式', '回调函数')
fs.readFile('./file/1.txt', 'utf8', function(err, dataStr) {
    //打印失败信息
    console.log(err)
    console.log('--------')
    //打印成功信息
    console.log(dataStr)
})
*/

fs.readFile('./file/11.txt', 'utf8', function (err, dataStr) {
    if(err) {
        return console.log('文件读取失败！' + err.message)
    }
    console.log('文件读取成功！' + dataStr)
})