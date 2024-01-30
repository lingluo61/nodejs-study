//引入fs模块
const fs = require('fs')

//读取文件
fs.readFile(__dirname + '/file/成绩.txt', 'utf8', function (err, dataStr) {
    //判断文件是否读取成功
    if (err) {
        return console.log('文件读取失败！' + err.message)
    }
    //console.log('文件读取成功！\n' + dataStr)

    //1.分割数据，按照空格进行分割
    const arrOld = dataStr.split(' ')
    //console.log(arrOld)
    //2.进行字符串替换操作
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', '：'))
    })
    //console.log(arrNew)
    //3.把数组中的每一项合并
    const newStr = arrNew.join('\r\n')
    //console.log(newStr)

    //写入文件
    fs.writeFile(__dirname + '/file/成绩-ok.txt', newStr, 'utf8', function (err) {
        if (err) {
            return console.log('文件写入失败！' + err.message)
        }
        console.log('文件写入成功！')
    })
})