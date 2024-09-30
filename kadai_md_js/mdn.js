// JavaScriptで自動で今日の日付を取得し、以下の形式で表示するコードを記述してください。

// ※2023年8月22日にプログラムを実行した場合、以下のように表示されるイメージ。
// 日付の表示形式	日付の表示方法
// 2023年8月22日	console.logで表示


// const today = new Date();
// const txt = (today.getFullYear())+'年'+(today.getMonth() + 1)+'月'+(today.getDate())+'日'
// console.log(txt);

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

console.log(year+'年'+month+'月'+day+'日');