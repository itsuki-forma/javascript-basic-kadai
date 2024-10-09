// event.js
//ボタンがクリックされたら2秒後に文章を書き換えるプログラムを記述してください。

const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
    setTimeout(() => {
        // console.log("a");
        text.textContent = "ボタンをクリックしました";
    }, 2000);
});
