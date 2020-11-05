// 云函数入口文件
const cloud = require('wx-server-sdk')
const rp = require('request-promise')
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const res = rp(`https://api.douban.com/v2/book/isbn/${event.isbn}` )
  .then(rst => {
    console.log(rst);
  })
  .catch(err => {
    console.error(err);
  })
  return res
}