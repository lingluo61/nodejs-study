//引入path模块
const path = require('path')
//引入fs模块
const fs = require('fs')

/*
    path.join用于拼接路径
*/

/*
//    ../会抵消前面一层路径
const pathStr = path.join('/a', '/b/c', '../', '/d', 'e')
console.log(pathStr)   //\a\b\d\e

const pathStr2 = path.join(__dirname, '/file/1.txt')
console.log(pathStr2)   //D:\class\project\1_15tt\file\1.txt
*/

fs.readFile(path.join(__dirname, '/file/1.txt'), 'utf8', function(err, dataStr) {
    if(err) {
        return console.log('文件读取失败！' + err.message)
    }
    console.log('文件读取成功！\n' + dataStr)
})