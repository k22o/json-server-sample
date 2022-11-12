## 起動

```
npm start
```

## files
- db.json: レスポンスを設定する
- route.json: routingを設定する
- public: 静的なファイル置き場
- json-server.json: オプション指定。
    - 実行コマンドの後ろにつけてもいいけど、ファイルに書いた方がわかりやすいので。

## setting 

```
npm install --save-dev json-server
```

## おまけ：応答
```
$ curl localhost:5000/api/profile
{
  "id": "1",
  "name": "goto"
}

$ curl localhost:5000/api/product/1
{
  "id": "1",
  "productName": "product1"
}

curl localhost:5000/api/product?id=2
[
  {
    "id": "2",
    "productName": "product2"
  }
]

curl localhost:5000/api/product
404

curl localhost:5000/sample.css

```

