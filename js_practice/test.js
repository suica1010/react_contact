console.log(document.querySelector('#title'))
const h1 = document.querySelector('#title')
let age = 30
let firstname = "jason"
let content = "裁縫"

//課題1
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


//課題2
//要件・配列をひとつづつコンソールへ出力
const arry = ["リンゴ","みかん","ブドウ","なし","ようかん","ファミチキ"]

//要素がnullではない　かつ　要素が配列の場合
if(arry !== null && Array.isArray(arry)){
    //項目をひとつづつ出力する
    arry.forEach(value =>{
        console.log(value)
    })
}
