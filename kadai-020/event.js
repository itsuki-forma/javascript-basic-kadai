// ボタンがクリックされたら表示する文章を書き換えるプログラムを記述してください。
//ボタンをクリックすると、テキストが「ボタンをクリックしました」に書き換わる。

const countBtn = document.getElementById("btn");

let i = 0;
// console.log(i);

countBtn.addEventListener("click", () => {
    i => 0; i++;
    // console.log(i);

    const h2Text = document.querySelector("h2");
    h2Text.textContent = 'ボタンをクリックしました';
});