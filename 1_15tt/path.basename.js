const path = require('path')

const fpath = '/a/b/c/index.html'

/*
    path.basename('文件路径')
    返回文件名
*/
const fullname = path.basename(fpath)
console.log(fullname)   //index.html

/*
    path.basename('文件路径', '文件扩展名')
    返回文件名，并且不带扩展名
*/
const withname = path.basename(fpath, '.html')
console.log(withname)   //index