const mysql = require('mysql')
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'my_db_01'
})

// 测试
// const sqlstr = 'select * from users'
// db.query(sqlstr, (err, results) => {
//   if (err) return console.log(err.message)
//   console.log(results)
// })

// 向 users 表中，新增一条数据
// const user = {username: 'Spider-Man', password: 'pcc123'}
// const sqlstr = 'insert into users (username, password) values (?, ?)'
// db.query(sqlstr, [user.username, user.password], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功!')
//   }
// })

// 简易写法
// const user = {username: 'Spider-Man2', password: 'pcc4321'}
// const sqlstr = 'insert into users set ?'
// db.query(sqlstr, user, (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('插入数据成功!')
//   }
// })

// 更新用户信息
// const user = {id: 5, username: 'aaa', password: '000'}
// const sqlstr = 'update users set username=?, password=? where id=?'
// db.query(sqlstr, [user.username, user.password, user.id], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })

// 简易写法
// const user = {id: 5, username: 'abc', password: '123'}
// const sqlstr = 'update users set ? where id=?'
// db.query(sqlstr, [user, user.id], (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('更新成功')
//   }
// })

// 删除 id 为 4 的用户
// const sqlstr = 'delete from users where id=?'
// db.query(sqlstr, 4, (err, results) => {
//   if (err) return console.log(err.message)
//   if (results.affectedRows === 1) {
//     console.log('删除成功')
//   }
// })

// 标记删除
const sqlstr = 'update users set status=? where id=?'
db.query(sqlstr, [1, 2], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})




