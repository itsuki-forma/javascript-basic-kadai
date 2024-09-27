// リストの中身を先頭から全て取り出して、出力結果が以下のようになるプログラムを、
// for文を利用した場合と、while文を利用した場合の2つの繰り返し処理を両方記述してください。


// リスト
const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日",
                "昭和の日","憲法記念日","みどりの日","こどもの日","海の日",
                "山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

    // while文
    // let i = 0;
    // while (i <= 15) {
    //     console.log(holidays[i])
    //     i += 1;
    // }


// while文
let i = 0;
const length = holidays.length;

while (i < length) {
    console.log(holidays[i])
    i += 1;
}


// for文
for (let i = 0; i < length; i += 1) {
    console.log(holidays[i])
}

