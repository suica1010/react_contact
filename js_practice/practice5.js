//id=contentを読み込む
let save_ev = document.querySelector("#save")
let parent = document.querySelector("#parent")
let addtxt = document.querySelector("#addTxt")

//要件：render関数で再描画処理
//配列でリストの項目を管理する
let todos = []
function render () {
    //要素を削除
    parent.innerHTML = ""
    //配列分要素を作成する
    todos.forEach((value, index) => {
        //li要素を作成
        let new_li = document.createElement("li")
        new_li.textContent = value
        //削除ボタンを作成
        let new_button = document.createElement("button")
        new_button.textContent = "削除"

        //削除ボタンに削除処理を追加
        new_button.addEventListener("click", () => {
            //配列から値を削除
            todos.splice(index, 1)
            //render()関数で再描画処理
            render()
        })

        //liにbuttonを子要素として追加
        new_li.appendChild(new_button)
        //ulにliを子要素として追加
        parent.appendChild(new_li)
    })

    //テキストボックスの値を削除
    addtxt.value = ""
}

save_ev.addEventListener("click", () => {
    //前後空白削除
    const value = addtxt.value.trim()
    //valueに値があれば処理を行う
    if(value) {
        //配列に値を追加
        todos.push(value)
        //レンダー関数で処理を行う
        render()
    }
})

// let del = (new_li) => {
//     //del属性取得
//     return () => new_li.remove()
//     console.log(new_li)
// }

// let save = () =>{
//     //li要素を作成
//     let new_li = document.createElement("li")
//     //button要素を追加
//     let new_button = document.createElement("button")
//     //li要素にinputの値を追加する
//     new_li.textContent = addtxt.value
//     //buttonの名称を追加
//     new_button.textContent = "削除"

//     //削除ボタンへ削除処理実装
//     //関数を引数に設定するとその場で実行されてしまう
//     // new_button.addEventListener('click', del(new_li), false)
//     //関数を引き渡すか、
//     new_button.addEventListener('click', () => {
//         new_li.remove()
//     }, false)

//     //要素を追加する
//     new_li.appendChild(new_button)
//     parent.appendChild(new_li)

//     //inputの値を削除
//     addtxt.value = ""

// }
// save_ev.addEventListener('click', save, false)
