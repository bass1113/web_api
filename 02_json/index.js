// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();

// http://localhost:3000/api/v1/listにアクセスしてきた時に
// ToDoリストを返す
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const ToDoList = [
        { title: 'JavaScriptを勉強する', done: true},
        { title: 'Node.jsを勉強する', done: false},
        { title: 'Web APIを作る', done: false}
    ];

    // JSONを送信する
    res.json(ToDoList);
});

// ポート番号3000でサーバを立てる
app.listen(3000, () => console.log('Listening on port 3000'));
