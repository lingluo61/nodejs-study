const path = require('path')

/*
    path.extname用于提取文件扩展名
*/
const fpath = '/a/b/c/index.txt'
const fext = path.extname(fpath)
console.log(fext)  //.txt