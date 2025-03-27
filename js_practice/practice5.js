//id=contentを読み込む
let save_ev = document.querySelector("#save")
let parent = document.querySelector("#parent")
let addtxt = document.querySelector("#addTxt")
let del_btn = document.querySelector("#del")

let del = (new_li) => {
    //del属性取得
    return () => new_li.remove()
    console.log(new_li)
}

let save = () =>{
    //li要素を作成
    let new_li = document.createElement("li")
    //button要素を追加
    let new_button = document.createElement("button")
    //li要素にinputの値を追加する
    new_li.textContent = addtxt.value
    //buttonの名称を追加
    new_button.textContent = "削除"

    //削除ボタンへ削除処理実装
    //関数を引数に設定するとその場で実行されてしまう
    // new_button.addEventListener('click', del(new_li), false)
    new_button.addEventListener('click', () => {
        new_li.remove()
    }, false)

    //要素を追加する
    new_li.appendChild(new_button)
    parent.appendChild(new_li)

    //inputの値を削除
    addtxt.value = ""

}
save_ev.addEventListener('click', save, false)
