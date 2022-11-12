// GET以外のアクセスの際に、dbが更新されるのを防ぐ
// リクエスト上は200で返るので、疎通確認はできる
module.exports = function (req, next) {
  
    if (req.method !== 'GET') {
        req.method = 'GET'
    }

    next()
}