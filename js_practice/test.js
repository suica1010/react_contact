console.log(document.querySelector('#title'))
const h1 = document.querySelector('#title')
let age = 30
let firstname = "jason"
let content = "裁縫"

//jsの場合、テンプレートリテラルを使用する場合`(バックオートで囲む)
const hello = (firstname, age, content) => 
    `「こんにちは、私は${age}歳の${firstname}です。趣味は${content}です。」`

//要素が存在する場合
if(h1){
    h1.innerHTML = hello(firstname, age, content)
}else{
    //要素が見つからない場合
    console.log("要素#titleが見つかりません")
}
